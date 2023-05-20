import React from 'react';
import '../common.css';

class CheckBox extends React.Component {
    render() {
        const {name, filterValue, label} = this.props;
        return (
            <div>
                <label>
                    <input type="checkbox" name={name} value={filterValue}/> {label}
                </label>
            </div>
        );
    }
}

class CheckBoxGroup extends React.Component {
    render() {
        const { name, options } = this.props;
        return (
            <form>
                {options.map((option, index) => (
                    <CheckBox key={index} name={name} filterValue={option.value} label={option.label} />
                ))}
            </form>
        );
    }
}

class LeftSideBox extends React.Component {
    render() {
        const originOptions = [
            { value: "France", label: "France" },
            { value: "USA", label: "USA" },
            { value: "Spain", label: "Spain" },
            { value: "Italy", label: "Italy" },
        ];

        const typeOptions = [
            { value: "Red", label: "Red" },
            { value: "White", label: "White" },
            { value: "Rose", label: "Rose" },
            { value: "Champgne", label: "Champgne" },
        ];

        return (
            <div className="leftside">
                <div className="leftside_box">
                    <h3 className="inside_text">FILTER WINES</h3>
                    <br />
                    <h4 className="inside_text">Origin</h4>
                    <CheckBoxGroup name="filter" options={originOptions} />
                    <br />
                    <h4 className="inside_text">Type</h4>
                    <CheckBoxGroup name="filter" options={typeOptions} />
                    <br />
                    <h4 className="inside_text">Up to this price</h4>
                    <form action="">
                        <span>$0</span>
                        <input type="range" id="price-range" name="price-range" min="0" max="100" value="0" />
                        <span>$100</span>
                    </form>
                </div>
            </div>
        );
    }
}

export default LeftSideBox;
