import React, {Component} from 'react';
/*functional component
const SearchBar = () =>{
  return <input />
};
*/
class SearchBar extends Component {
  constructor(props){
    super(props);//llamada a el método 'props' de la clase Component

    this.state = {term:''};//this.state es igual a un objeto
  }
  render(){//esto es ES*, es lo mismo que render:function(){}
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event=>this.onInputChange(event.target.value)} />
      </div>
    );
  }
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}
/*con el extends... está mejorando la clase, dandole acceso a las funcionalidades
de la clase Componentes que tiene react*/
/**/
/*we can create some instance of the class with something like new SearchBar*/
export default SearchBar;
