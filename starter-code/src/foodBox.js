import React from "react"
import foods from './foods.json'

class FoodBox extends React.Component{

        render(){
            return(
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                            <figure className="image is-64x64">
                                <img src={this.props.img} />
                            </figure>
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <p>
                                    <strong>{this.props.namer}</strong> <br />
                                    <small>{this.props.cals} cal</small>
                                </p>
                            </div>
                        </div>
                        <div className="media-right">
                            <div className="field has-addons">
                                <div className="control">
                                    <input
                                        onChange= {()=>{}}
                                        className="input"
                                        type="number"
                                        value="1"
                                    />
                                </div>
                                <div className="control">
                                    <button className="button is-info">
                                        +
          </button>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            )
        }


}

export default FoodBox