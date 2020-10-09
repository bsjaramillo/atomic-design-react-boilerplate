import React, {Component} from 'react';

import Title from '../../atoms/Title/Title';
import Article from '../../organisms/Article/Article';
import Form, {IFormProps} from '../../organisms/Form/Form';

import './_style.scss';
export interface IHomeProps{
form:IFormProps;
}

class Home extends Component<IHomeProps,{}> {
static defaultProps:IHomeProps={
  form:{buttonText:"Submit",fields:[{label:"Input 1",input:{placeholder:"Placeholder for input 1",text:" ",type:"text"}},{label:"Input 2",input:{placeholder:"Placeholder for input 2",text:" ",type:"text"}}]}
}
render(){
  return(
  <div className="t__home">
    <Title text="Basic React App" />
    <Title text="Example of an atomic Blog" />
    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />

    <Article
      title="This is an article"
      image={{ src: 'http://placehold.it/300x200', alt: 'Placehold' }}
      content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id nulla cursus,
      hendrerit lectus id, pulvinar massa."
    />

    <hr />
    <Title text="Example of an Atomic Form" />
    <Form fields={this.props.form.fields} buttonText="Submit" />
  </div>
  )};
};

export default Home;
