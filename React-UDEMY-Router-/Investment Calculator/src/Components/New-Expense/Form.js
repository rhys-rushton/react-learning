import Button from '../UI/Button'
import '../../index.css'


const Form = (props) => {

    return (
        <form className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input type="number" id="duration" />
          </p>
        </div>
        
        <p className="actions">
        <Button buttonType={"reset"} buttonClass={"buttonAlt"} value = {"Reset"}></Button>
        <Button buttonType={"submit"} buttonClass={"button"} value={"Calculate"}></Button>
    

        </p>
      </form>
    )




}

export default Form; 

