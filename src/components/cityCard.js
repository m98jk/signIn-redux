import React, { Component } from 'react';

export default class CityCard extends Component {
  render() {
    return (
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{this.props.name}</div>
          <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div class="px-6 py-4">
          {this.props.towns.map((town) => (
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
              {town}
            </span>
          ))}
        </div>
      </div>
    );
  }
}
