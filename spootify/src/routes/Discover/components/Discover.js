import React, { useState, useEffect } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import httpClient from "../api/makeRequest";
import '../styles/_discover.scss';
/* converted to functional component to reduce constructor preloads */
function Discover() {
  const initialState = {
    newReleases: [],
    playlists: [],
    categories: []
  }


  /* keeping a central state for all items */
  const [state, setState] = useState(initialState);

  const fetchdataOnLoad = async () => {
    /* parallel fetch using promises */

    let [resp_new_release, resp_featured_playlists, resp_categories] = await Promise.all([
      httpClient("new-releases").then(resp => resp.data),
      httpClient("featured-playlists").then(resp => resp.data),
      httpClient("categories").then(resp => resp.data)
    ]);

    /* set state once after all three has been fetched */
    setState(prevState => ({
      ...prevState,
      newReleases: resp_new_release.albums.items,
      playlists: resp_featured_playlists.playlists.items,
      categories: resp_categories.categories.items
    }))


  }


  useEffect(() => {
    /* loading once on page load */
    fetchdataOnLoad()

  },[])


  return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={state.newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={state.playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={state.categories} imagesKey="icons" />
      </div>
  )
}

export default Discover

/*
export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
*/