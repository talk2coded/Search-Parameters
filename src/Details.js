import { Component } from "react";
import { withRouter } from "react-router-dom";
import Carousel from "./Carousel";
//import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";


class Details extends Component{
    // constructor(){
    //    super(); }

       state = { loading: true, showModal: false };
    
    async componentDidMount(){
         const res =  await fetch(
             `https:pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`
         );
         const json = await res.json();
        //  this.setState(Object.assign(
        //      {
        //      loading: false,
           
        //  },
        //  json.pets[0]
        //  ))

        this.setState({
            loading: false,
            name: json.pets[0].name,
            breed: json.pets[0].breed,
            animal: json.pets[0].animal,
            city: json.pets[0].city,
            state: json.pets[0].state,
            description: json.pets[0].description,
            images: json.pets[0].images
        })
    }

    toggleModal = () => this.setState({showModal: !this.state.showModal})
    adopt = () => (window.location = "http://bit.ly/pet-adopt");

    render(){
        if(this.state.loading){
            return <h2>loading....</h2>
        }
        const {animal, breed, city, state, description, name, images, showModal} = this.state;
        return (
         <div className="details">
                <Carousel images={images} />
                <h1>{name}</h1>
                <h2>{`${animal} - ${breed} - ${city}, ${state}`}</h2>
          {/* equivalent of above line      <h2>{animal} - {breed} - {city}, {state}</h2> */}
                <button onClick={this.toggleModal}>Adopt {name}</button>
                <p>{description}</p>
                {
                    showModal ? (
                        <Modal>
                            <div>
                                <h1>Would you like to adopt {name} ?</h1>
                                <div className="buttons">
                                    <button onClick={this.adopt}>Yes</button>
                                    <button onClick={this.toggleModal}>No</button>
                                </div>
                            </div>
                        </Modal>
                    ) : null }
            
            </div>
        )
    }
}



export default withRouter(Details);

// const DetailsWithRouter = withRouter(Details);

// export default function DetailsWithErrorBoundary(){
//     return(
//         <ErrorBoundary>
//             <DetailsWithErrorBoundary/>
//         </ErrorBoundary>
//     );
// };