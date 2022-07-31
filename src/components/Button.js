import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
    // hooking up a context object to a class component
    // static contextType = ... is adding a new property to the 
    // class (as opposed to modifying them like we do with render() etc.)
    // This is equivalent to doing Button.contextType = LanguageContext 
    // at the bottom of the file.
    // static contextType = LanguageContext;

    render() {
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'
        return (
            <ColorContext.Consumer>
                {(color) => (
                    <button className={`ui button ${color}`}>
                        <LanguageContext.Consumer>
                            {(value) => value.language === 'english' ? 'Submit' : 'Voorleggen'}
                        </LanguageContext.Consumer>
                    </button>
                )}
            </ColorContext.Consumer>
        );
    }
}

export default Button;