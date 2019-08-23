import React, { Component } from 'react'
import instance from '../../services/api.js'

/**
 * API Get Details
 * 
 * @author João Crulhas - https://github.com/joaoCrulhas
 */

export default class PostDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            post: {},
        }
    }

    async componentDidMount() {
        const { postId } = this.props.match.params;
        const { data } = await instance.get(`/posts/${postId}`);
        this.setState({post:data});
    }

    render() {
        return (
            <>
				<h1>
					<small className="text-muted">título</small><br/>
					{this.state.post.title}
				</h1>
				<br/>
                <p>Id post: <b>{this.state.post.id}</b></p>
                <p>Create id: <b>{this.state.post.userId}</b></p>
				<small>Post:</small>
                <p className="lead">{this.state.post.body}</p>
            </>
        )
    }
}
