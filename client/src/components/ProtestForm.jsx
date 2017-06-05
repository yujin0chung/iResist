import React from 'react';
import { connect } from 'react-redux';
import { HomeIcon, Form, PageTitle, Input, InputInfo, Label, Search, Submit } from './StyledComponents.jsx';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
// import moment from 'moment';
// import TimePicker from 'rc-time-picker';
import axios from 'axios';


class ProtestForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      userId: this.props.fetchInitDataReducer.data.user.userId,
      description: '',
      cause: '',
      address: '',
      date: '',
      timeStart: '',
      timeEnd: '',
      lat: 0,
      long: 0,
      protests: [],
      zoom: 1
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLocSearch = this.handleLocSearch.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.postEvent(this.state);
    this.props.changeView('DASHBOARD');
  }

  handleLocSearch () {
    axios.get('/api/geocoder', {
      params: {
        address: this.state.address
      }
    })
    .then(response => {
      this.setState({
        lat: response.data[0].latitude,
        long: response.data[0].longitude,
        protests: [[response.data[0].latitude, response.data[0].longitude]],
        zoom: 14
      });
    })
    .catch(error => {
      console.log('ERROR: ', error);
    });
  }

  render() {
    
    const { name, address, date, timeStart, timeEnd, lat, long} = this.state;
    const formValid = name.length > 0 && address.length > 0 && date.length > 0 && timeStart.length > 0 && timeEnd.length > 0 && lat !== 0 && long !== 0;
    // const format = 'h:mm a';
    // const now = moment().hour(0).minute(0);
    
    return (
      <div>
    
        <HomeIcon
          className="fa fa-home fa-lg"
          style={{paddingLeft: '45px'}}
          onClick={() => this.props.changeView('DASHBOARD')}
        >
        </HomeIcon>

        <Form onSubmit={() => this.handleSubmit()}>

          <PageTitle >
            Lead a Protest
          </PageTitle>

          <InputInfo>
            <Label>
              <div>Protest Name</div>
              <div><Input type="text" value={this.state.name} onChange={(e) => this.setState({ name: e.target.value })} /></div>
            </Label> < br/>

            <Label>
              Cause
              <div><Input type="text" value={this.state.cause} onChange={(e) => this.setState({ cause: e.target.value })} /></div>
            </Label> < br/>

            <Label>
              Description
              <div><Input type="text" style={{height: '100px'}}value={this.state.description} onChange={(e) => this.setState({ description: e.target.value})} /></div>
            </Label> < br/>

            <Label>
              Address
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <Input type="text" value={this.state.address} onChange={(e) => this.setState({ address: e.target.value })} />
                <Search type="button" value="Find on map" style={{}} onClick={this.handleLocSearch}/>
              </div>
            </Label> < br/>

          </InputInfo>

          <Map className="add-protest-map" center={[this.state.lat, this.state.long]} zoom={this.state.zoom} style={{marginBottom: '20px'}}>
            <TileLayer
              url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {this.state.protests.map((position, i) =>
              <Marker key={`marker-${i}`} position={position}></Marker>
            )}
          </Map>

          <Label>
            Select a date
            <div><Input type="date" value={this.state.date} onChange={(e) => this.setState({ date: e.target.value })} /></div>
          </Label> < br/>

          <Label>
            Select time range
            <div><Input type="time" value={this.state.timeStart} onChange={(e) => this.setState({ timeStart: e.target.value })} /></div>
            <div><Input type="time" value={this.state.timeEnd} min={this.state.timeStart} onChange={(e) => this.setState({ timeEnd: e.target.value })} /></div>
          </Label> < br/>

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <Submit type="submit" value="Submit" disabled={!formValid} onClick={(e) => { this.handleSubmit(e); this.props.changeView('DASHBOARD')}}/>
            <div style={{margin: '6px'}}></div>
            <Submit type="button" value="Cancel" onClick={() => this.props.changeView('DASHBOARD')} />
          </div>

        </Form>
      </div>
    );
  }
}


export default ProtestForm;
