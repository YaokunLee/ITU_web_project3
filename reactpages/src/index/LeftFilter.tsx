import React, { Component } from 'react';
import '../common.css';

interface Option {
    value: string;
    label: string;
}

interface CheckBoxProps {
    name: string;
    filterValue: string;
    label: string;
    onValueChange:  (value: string) =>void;
}

// CheckBox component needs to use the 'checked' prop now:
class CheckBox extends Component<CheckBoxProps & {isChecked: boolean}> {
    render() {
        const { name, filterValue, label, onValueChange, isChecked } = this.props;
        return (
            <div>
                <label>
                    <input
                        type="checkbox"
                        name={name}
                        value={filterValue}
                        onChange={() => onValueChange(filterValue)}
                        checked={isChecked}
                    />
                    {label}
                </label>
            </div>
        );
    }
}

interface CheckBoxGroupProps {
    name: string;
    options: Option[];
    onValueChange: (value: string | null) => void;
}

interface CheckBoxGroupState {
    selectedOption: string | null;
}
class CheckBoxGroup extends Component<CheckBoxGroupProps, CheckBoxGroupState> {
    constructor(props: CheckBoxGroupProps) {
        super(props);
        this.state = {
            selectedOption: null
        };
    }

    handleValueChange = (value: string) => {
        if (this.state.selectedOption === value) {
            this.setState({selectedOption: null});
            this.props.onValueChange(null);
        } else {
            this.setState({selectedOption: value});
            this.props.onValueChange(value);
        }
    };

    render() {
        const { name, options } = this.props;
        return (
            <form>
                {options.map((option, index) => (
                    <CheckBox
                        key={index}
                        name={name}
                        filterValue={option.value}
                        label={option.label}
                        onValueChange={this.handleValueChange}
                        isChecked={this.state.selectedOption === option.value}
                    />
                ))}
            </form>
        );
    }
}
interface LeftSideBoxProps {
    onOriginChange: (value: string | null) => void;
    onTypeChange: (value: string | null) => void;
}

class LeftSideBox extends Component<LeftSideBoxProps> {
    render() {
        const { onOriginChange, onTypeChange } = this.props;

        const originOptions: Option[] = [
            { value: "France", label: "France" },
            { value: "USA", label: "USA" },
            { value: "Spain", label: "Spain" },
            { value: "Italy", label: "Italy" },
        ];

        const typeOptions: Option[] = [
            { value: "Red", label: "Red" },
            { value: "White", label: "White" },
            { value: "Rosé", label: "Rosé" },
            { value: "Champagne", label: "Champagne" },
        ];

        return (
            <div className="leftside">
                <div className="leftside_box">
                    <h3 className="inside_text">FILTER WINES</h3>
                    <br />
                    <h4 className="inside_text">Origin</h4>
                    <CheckBoxGroup name="origin" options={originOptions} onValueChange={onOriginChange} />
                    <br />
                    <h4 className="inside_text">Type</h4>
                    <CheckBoxGroup name="type" options={typeOptions} onValueChange={onTypeChange} />
                    <br />
                    <h4 className="inside_text">Up to this price</h4>
                    <form action="reactpages/src/index">
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
