import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import faker from 'faker';


class ProjectGallery extends Component {
    render() {
        return(
            <Gallery photos={faker.image.nature()} direction={"column"}></Gallery>
        )
    }
}

export default ProjectGallery;
