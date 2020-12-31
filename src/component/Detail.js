import { render } from "@testing-library/react";
import React from "react";
import "./Detail.css";

class Details extends React.Component{
    

    componentDidMount(){
        const {location,history} = this.props;
        if (location.state == undefined){
            history.push('/');
        }
    }

    render(){
        const { location } = this.props;
        if (location.state) {
            const {poster_large,title} = location.state;
            return (
                <div>
                    <section className="Containor">
                        <img className="poster" src={poster_large} alt={title}></img>
                    </section>
                </div>
            );
        } else {
            return null
        }
    }
}

export default Details