import React from 'react';


class Checkbox extends React.Component {
    state = {
        Boxes: {
            CheckBox1: false,
            CheckBox2: false,
            CheckBox3: false,
            CheckBox4: false,
            CheckBox5: false,
            CheckBox6: false,
            CheckBox7: false,
            CheckBox8: false,
            CheckBox9: false,
            CheckBox10: false
        }
    }
    chkclick = (e) => {
        var { name, checked } = e.target;

        this.setState((e) => {
            var Selectedbox = e.Boxes;
            return Selectedbox[name] = checked;
        });
    }

render() {
    var display= Object.keys(this.state.Boxes).filter((x)=>this.state.Boxes[x]);
    return (
        <div class="one">
            <center>
                <h1>Please Select Any of the Checkboxes</h1>
                <hr />
                <div className="two">
                <input type="checkbox" class="check" name="CheckBox1" onChange={this.chkclick} />Checkbox1<br/>
                <input type="checkbox" class="check" name="CheckBox2" onChange={this.chkclick} />Checkbox2<br/>
                <input type="checkbox" class="check" name="CheckBox3" onChange={this.chkclick} />Checkbox3<br/>
                <input type="checkbox" class="check" name="CheckBox4" onChange={this.chkclick} />Checkbox4<br/>
                <input type="checkbox" class="check" name="CheckBox5" onChange={this.chkclick} />Checkbox5<br/>
                <input type="checkbox" class="check" name="CheckBox6" onChange={this.chkclick} />Checkbox6<br/>
                <input type="checkbox" class="check" name="CheckBox7" onChange={this.chkclick} />Checkbox7<br/>
                <input type="checkbox" class="check" name="CheckBox8" onChange={this.chkclick} />Checkbox8<br/>
                <input type="checkbox" class="check" name="CheckBox9" onChange={this.chkclick} />Checkbox9<br/>
                <input type="checkbox" class="check" name="CheckBox10" onChange={this.chkclick}/>Checkbox10<br/>
                </div>
                
                <hr />
                {/* <div> style= {{ backgroundColor: "Black", color: "cyan" }} */}
                <div>
                <strong>{display + "   "}</strong>
                </div>
            </center>
        </div>

    )
}
}


export default Checkbox;