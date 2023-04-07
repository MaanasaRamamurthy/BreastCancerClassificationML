import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import "./css/App.css"

function App() {

  const [data,setData] = useState([{}])
  const [output , setOutput] = useState('')

  const loadData = async() =>{
    const result = await Axios.get("http://localhost:5000");          
        setData(result.data)      
}
React.useEffect(() => {
  loadData();
},[]);
console.log(data)


const [formData, setFormData] = React.useState(
  {
  radius_mean:'',
  texture_mean: "",
  perimeter_mean:"",
  area_mean:'',
  smoothness_mean:'',
  compactness_mean:'',
  concavity_mean:'',
  concave_points_mean:'',
  symmetry_mean:'',
  fractal_dimension_mean:'',
  radius_se:'',
  texture_se:'',
  perimeter_se:'',
  area_se:'',
  smoothness_se:'',
  compactness_se:'',
  concavity_se:'',
  concave_points_se:'',
  symmetry_se:'',
  fractal_dimension_se:'',
  radius_worst:'',
  texture_worst:'',
  perimeter_worst:'',
  area_worst:'',
  smoothness_worst:'',
  compactness_worst:'',
  concavity_worst:'',
  concave_points_worst:'',
  symmetry_worst:'',
  fractal_dimension_worst:''
}
)

function handleSubmit(e){
  e.preventDefault()
  Axios({
    method: 'POST',
    url: 'http://localhost:5000',
    data: {
      radius_mean: formData.radius_mean,
      texture_mean: formData.texture_mean, 
      perimeter_mean: formData.perimeter_mean,
      area_mean: formData.area_mean,
      smoothness_mean: formData.smoothness_mean,
      compactness_mean: formData.compactness_mean,
      concavity_mean: formData.concavity_mean,
      concave_points_mean: formData.concave_points_mean,
      symmetry_mean: formData.symmetry_mean,
      fractal_dimension_mean: formData.fractal_dimension_mean,
      radius_se: formData.radius_se,
      texture_se: formData.texture_se,
      perimeter_se: formData.perimeter_se,
      area_se: formData.area_se,
      smoothness_se: formData.smoothness_se,
      compactness_se: formData.compactness_se,
      concavity_se: formData.concavity_se,
      concave_points_se: formData.concave_points_se,
      symmetry_se: formData.symmetry_se,
      fractal_dimension_se: formData.fractal_dimension_se,
      radius_worst: formData.radius_worst,
      texture_worst: formData.texture_worst,
      perimeter_worst: formData.perimeter_worst,
      area_worst: formData.area_worst,
      smoothness_worst: formData.smoothness_worst,
      compactness_worst: formData.compactness_worst,
      concavity_worst: formData.concavity_worst,
      concave_points_worst: formData.concave_points_worst,
      symmetry_worst: formData.symmetry_worst,
      fractal_dimension_worst: formData.fractal_dimension_worst
    }
  })
  .then((response) => {
    setOutput(response.data)
    console.log(output)
    console.log(response)
  })
  .catch((error) => {
    console.log(error)
  })
}
function handleChange(event){

setFormData(values => ({...values, [event.target.name]: event.target.value}))
}
console.log(formData)
  return (
    <div className='main_body_content'>
      <h1> Breast Cancer Classification </h1>
      <p>Predict if a breast tumor is benign or malignant.</p>
      <form 
      onSubmit={(e)=>{handleSubmit(e);}}
      >
        <div className='input_field'>
        <div >
        <div className="group">
          <input name="radius_mean" type='number' onChange={handleChange} value={formData.radius_mean}/>
          <span className="highlight"></span>
          <span className="bar"></span>
          <label>Radius of Lobes</label>
        </div>
        <div className="group">
        
        <input name="texture_mean" type="number" onChange={handleChange} value={formData.texture_mean}/>
        <span className="bar"></span>
        <label>Mean of Surface Texture</label>
        </div>
        
        <div className="group">
        
        <input name="perimeter_mean" type="number" onChange={handleChange} value={formData.perimeter_mean}/>
        <label>Outer Perimeter of Lobes</label>
        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="area_mean" type="number" onChange={handleChange} value={formData.area_mean}/>
        <label>Mean Area of Lobes</label>
        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="smoothness_mean" type="number" onChange={handleChange} value={formData.smoothness_mean}/>
        <label>Mean of Smoothness Levels</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="compactness_mean" type="number" onChange={handleChange} value={formData.compactness_mean}/>
        <label>Mean of Compactness</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concavity_mean" type="number" onChange={handleChange} value={formData.concavity_mean}/>
        <label>Mean of Concavity</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concave_points_mean" type="number" onChange={handleChange} value={formData.concave_points_mean}/>
        <label>Mean of Cocave Points</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="symmetry_mean" type="number" onChange={handleChange} value={formData.symmetry_mean}/>
        <label>Mean of Symmetry</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="fractal_dimension_mean" type="number" onChange={handleChange} value={formData.fractal_dimension_mean}/>
        <label>Mean of Fractal Dimension</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="radius_se" type="number" onChange={handleChange} value={formData.radius_se}/>
        <label>SE of Radius</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="texture_se" type="number" onChange={handleChange} value={formData.texture_se}/>
        <label>SE of Texture</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="perimeter_se" type="number" onChange={handleChange} value={formData.perimeter_se}/>
        <label>Perimeter of SE</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="area_se" type="number" onChange={handleChange} value={formData.area_se}/>
        <label>Area of SE</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="smoothness_se" type="number" onChange={handleChange} value={formData.smoothness_se}/>
        <label>SE of Smoothness</label>

        <span className="bar"></span>
        </div>
        
        </div>
        <div>
        <div className="group">
        <input name="compactness_se" type="number" onChange={handleChange} value={formData.compactness_se}/>
        <label>SE of compactness</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concavity_se" type="number" onChange={handleChange} value={formData.concavity_se}/>
        <label>SEE of concavity</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concave_points_se" type="number" onChange={handleChange} value={formData.concave_points_se}/>
        <label>SE of concave points</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="symmetry_se" type="number" onChange={handleChange} value={formData.symmetry_se}/>
        <label>SE of symmetry</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="fractal_dimension_se" type="number" onChange={handleChange} value={formData.fractal_dimension_se}/>
        <label>SE of Fractal Dimension</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="radius_worst" type="number" onChange={handleChange} value={formData.radius_worst}/>
        <label>Worst Radius</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="texture_worst" type="number" onChange={handleChange} value={formData.texture_worst}/>
        <label>Worst Texture</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="perimeter_worst" type="number" onChange={handleChange} value={formData.perimeter_worst}/>
        <label>Worst Permimeter</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="area_worst" type="number" onChange={handleChange} value={formData.area_worst}/>
        <label>Worst Area</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="smoothness_worst" type="number" onChange={handleChange} value={formData.smoothness_worst}/>
        <label>Worst Smoothness</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="compactness_worst" type="number" onChange={handleChange} value={formData.compactness_worst}/>
        <label>Worse Compactness</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concavity_worst" type="number" onChange={handleChange} value={formData.concavity_worst}/>
        <label>Worse Concavity</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="concave_points_worst" type="number" onChange={handleChange} value={formData.concave_points_worst}/>
        <label>Worst Concave Points</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="symmetry_worst" type="number" onChange={handleChange} value={formData.symmetry_worst}/>
        <label>Worst Symmetry</label>

        <span className="bar"></span>
        </div>
        
        <div className="group">
        <input name="fractal_dimension_worst" type="number" onChange={handleChange} value={formData.fractal_dimension_worst}/>
        <label>Worst Fractal Dimension</label>

        <span className="bar"></span>
        </div>
        </div>
        
        </div>
        <div>
        <button 
        className="btn btn-submit"
        onClick={(e)=>{handleSubmit(e);}}
        >Submit</button>
        </div>
        <p>{output}</p>
      </form>

    </div>
  )
}

export default App

