import React, { Component } from 'react';
import './repos.css';

class Repos extends Component{

    constructor(props){
        super(props);

        this.state ={
            repos: []
        }
    }

    componentDidMount () {
        // le pego a la api de github 
        fetch('https://api.github.com/users/dune0/repos')
            // cuando la api me responde, como se que es un json, le pido que me lo transforme en lo que es... y esa funcion me devuelve otra promise
            .then((response) => {
                return response.json()
            })
            // una vez que tengo el json transformado (AKA el array de repositorios) lo guardo en el estado del componente
            .then((repositorios) => {
                console.log(repositorios)
                this.setState({
                    repos: repositorios
                })
            })
            // .then(function(repos){
            //     console.log(repos){
            //         return repos.map(function(repo){
            //             return {'name':repo.name, 'id':repo.id, 'url':repo.url, 'description':repo.description}
            //         });
            //     }
            // });

        // .then(repos => this.setState({repos}));
    }

    render(){
        return(
            <div className="repos">
                <div id="titulo2">
                    <h1>Repositorios</h1>
                </div>
                <div id="desarrollo2">
                    <ul className='reposList'>
                                {this.state.repos.map(function (el) {
                                    return <div><li>{el.name} <a href={el.html_url}target="_blank">Ir al repositorio</a></li></div>
                                })}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Repos;