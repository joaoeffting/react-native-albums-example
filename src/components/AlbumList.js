//@flow

import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import AlbumItem from './AlbumItem';

import type { Album } from '../flow/types';

type State = {
    albums: Array<Album>
}

class AlbumList extends Component {
    state: State = {
        albums: []
    }
    async componentWillMount() {
        const URL_BASE = `https://rallycoding.herokuapp.com/api`;

        try {
            const response = await axios.get(`${URL_BASE}/music_albums`);
            this.setState({ albums: response.data });
        } catch (e) {
            console.error(`Ocorreu um erro: ${e}`);
        }
    }
    render() {
        const { albums } = this.state;
        return (
            <ScrollView>
                {
                    albums.map(album => (
                        <AlbumItem 
                            key={album.title}
                            artist={album.artist}
                            image={album.image}
                            thumbnail_image={album.thumbnail_image}
                            title={album.title}
                            url={album.url}
                        />
                    ))
                }
            </ScrollView>
        );
    }
}

export default AlbumList;
