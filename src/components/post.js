import React, { Component } from 'react';
import CityCard from './cityCard';
import { connect } from 'react-redux';
// import { fetchPost } from './redux/actions/actions';
export default class Posts extends Component {
  // constructor(props) {
  // super(props);
  state = {
    loading: true,
    title: '',
    towns: '',
    // };
  };
  async componentDidMount() {
    const res = await fetch('https://iq-cities.herokuapp.com/city');
    const data = await res.json();
    console.log(data);
    this.setState({
      towns: data,
      loading: false,
    });
    console.log(this.state.towns);
  }
  render() {
    return (
      <div>
        {/* {this.state.towns} */}
        {this.state.loading ? (
          <h1>Posts Loading ...</h1>
        ) : (
          this.state.towns.map((city) => (
            <CityCard name={city.name} key={city.id} towns={city.towns} />
          ))
        )}
      </div>
    );
  }
}
// const mapStateToProps = (state) => ({
//   posts: state.posts,
// });
// export default connect(mapStateToProps, { fetchPost })(Posts);
