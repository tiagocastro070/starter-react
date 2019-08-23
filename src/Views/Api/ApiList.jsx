import React, { Component } from 'react'
import instance from '../../services/api.js'
import { Link } from 'react-router-dom';

/**
 * API Get List
 * 
 * @author João Crulhas - https://github.com/joaoCrulhas
 */

export default class Apiindex extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts:[]
        };
    }

    async componentDidMount() {
        const { data } = await instance.get('/posts');
        this.setState({posts: data});
    }

    createRows() {
        return this.state.posts.map( (post, index) =>
            <tr key={index}>
                <td><Link to={ `list/${post.id}` }>{post.id}</Link></td>
                <td>{post.userId}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
            </tr>
        )
    }


    render() {
        return (
            <div className="container">
                <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Post</th>
                    </tr>
                </thead>
                <tbody>
                    { this.createRows() }
                </tbody>
                </table>
            </div>
        )
    }
}

