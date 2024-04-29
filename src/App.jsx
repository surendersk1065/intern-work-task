import { useEffect, useState } from "react"
import Header from "./components/Header"
import Lifestyle from "./components/Lifestyle"
import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import { Route, Routes, useNavigate } from "react-router-dom"
import Signupform from "./components/Signupform"
import api from "./api/jobs"
import Web from "./components/Web"
import Analyst from "./components/Analyst"
import Hr from "./components/Hr"
import Marketing from "./components/Marketing"
import Network from "./components/Network"
import Support from "./components/Support"
import Jobcontainer from "./components/Jobcontainer"
import Jobdesc from "./components/Jobdesc"
import Update from "./components/Update"
import Footer from "./components/Footer"


function App() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {
    const fetchjobs = async () => {
      try{
        const response = await api.get('/job')
        setJobs(response.data)
      }
      catch (err) {
        if(err.response) {
          console.log(err.response.data)
          console.log(err.response.status)
          console.log(err.response.headers)
        }
        else{
          console.log(`Error: ${err.message}`)
        }
      }
    }
    fetchjobs()
  }, [])



  const Data = { 
    username: "", 
    email: "", 
    password: "" 
}
const [values, setValues] = useState(Data)
const [error, setError] = useState({})
const [submit, setSubmit] = useState(false)
const navigate = useNavigate()

const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
}

const handleSubmit = (e) => {
    e.preventDefault()
    setError(validate(values))
    setSubmit(true)
}

useEffect(() => {
    if (Object.keys(error).length === 0 && submit) {
        alert(` Hii! ${values.username} logged/Signed in successfully`)
        navigate('/')
    }
}, [error])

const validate = (value) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i
    if (!value.username) {
        errors.username = "Username is required!"
    }

    if (!value.email) {
        errors.email = "Email is required!"
    } 
    else if (!regex.test(values.email)) {
        errors.email = "This is not a valid email format!"
    }

    if (!value.password) {
        errors.password = "Password is required"
    } 
    else if (value.password.length < 8) {
        errors.password = "Password should have more than 8 characters"
    } 
    return errors
}
const [search, setSearch] = useState('')
const [filresult, setFilresult] = useState([])

useEffect(() =>{
  const result = jobs.filter((val) => ((val.title).toLowerCase().includes(search.toLowerCase())))
  setFilresult(result)
}, [jobs, search])

const [homeres, setHomeres] = useState([])

useEffect(() => {
  const result = jobs.filter((val) =>val.type === 'web' || val.type === 'data')
  setHomeres(result)
},[jobs, search])

const [name , setName] = useState('')
const [mail, setMail] = useState('')


  return (
    <>
    <Header 
      name = {name}
      mail = {mail}
      search = {search}
      setSearch = {setSearch}
    />

    <Routes>
      <Route path="/" element = {<Home jobs={homeres}/>} />
      <Route path="/update" element = {<Update name = {name} setName = {setName} mail = {mail} setMail = {setMail}/>} /> 
            
      <Route path="/jobs" element= {<Jobcontainer search = {search} setSearch = {setSearch}/>}>
          <Route path="/jobs" element = {
              <Web jobs = {filresult.filter((val) => val.type === 'web')}/>
          } />
              
          <Route path="data" element = {
              <Analyst jobs = {filresult.filter((val) => val.type === 'data')}/>
            } />

          <Route path="hr" element = {
              <Hr jobs = {filresult.filter((val) => val.type === 'hr')}/>
          } />
            
          <Route path="market" element = {
              <Marketing jobs = {filresult.filter((val) => val.type === 'market')}/>
          } />
            
          <Route path="net" element = {
              <Network jobs = {filresult.filter((val) => val.type === 'intern')}/>
          } />
            
          <Route path="tech" element = {
              <Support jobs = {filresult.filter((val) => val.type === 'tech')}/>
          } />
            <Route path=":id" element = {<Jobdesc jobs = {jobs}/>}/>
        </Route>
        

      
      <Route path="/lifestyle" element = {<Lifestyle />} />
      <Route path="/about" element = {<About />} />
      <Route path="/contact"> 

      <Route index element = {<Contact 
        values ={values} 
        error = {error} 
        handleChange = {handleChange} 
        handleSubmit = {handleSubmit}
      />} />
      <Route path="signup" element= {<Signupform 
         values ={values} 
         error = {error} 
         handleChange = {handleChange} 
         handleSubmit = {handleSubmit}
      />} />
      </Route>
      </Routes>
      <Footer />
    
    
    
    
    
    </>
  )
}

export default App
