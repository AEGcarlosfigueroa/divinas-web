import React from 'react'
import logo from './assets/logo.png'
import './App.css'
import memberInfo from './info/memberInfo.json'
import Member from './props/member'
import Service from './props/service'
import mailLogo from './assets/mail.png'
import phoneLogo from './assets/phone.png'
import serviceInfo from './info/serviceInfo.json'

function App() {

  return (
    <>
      <div id="header">
        <img id="headerImage" src={logo}/>
        <h1 id="headerText">DIVINAS DE LA MUERTE</h1>
      </div>

      <div style={{alignItems: 'center', width: '100%', height:'auto', textAlign: 'center', position: 'absolute', top: '10%'}}>

        <h1>NUESTROS SERVICIOS</h1>
        <div style ={{display: 'flex', flexDirection: 'row', height:'auto', width: '100%', overflow: 'scroll', position: 'relative'}}>
           {serviceInfo.map(elem => Service(elem))}
        </div>

        <h1>ESPACIO PRIVADO</h1>
        <h2>Nuestro espacio online para que puedas personalizar tu vestimenta en cualquier momento, privadamente</h2>
        <button style={{backgroundColor: 'black'}}>Registrarse o inicial sesión</button>

        <h1>NUESTRO EQUIPO</h1>
        <div style ={{display: 'flex', flexDirection: 'row', height:'auto', width: '100%', overflow: 'scroll', position: 'relative'}}>
           {memberInfo.map(elem => Member(elem))}
        </div>

        <div style={{height: '20%', width: '100%', backgroundColor: 'gray', position: 'relative', alignItems: 'normal'}}>
          <h2 style={{textAlign: 'left', marginLeft: '5%', color: 'black'}}>CONTACTO</h2>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={mailLogo} style={{height: '5%', resize: 'vertical', width: '4%', alignSelf: 'left', marginLeft: '2%', marginBottom: '2%'}}/>
            <h3 style={{color: 'black', marginLeft: '2%'}}>empresadivinasdelamuerte@gmail.com</h3>
          </div>
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img src={phoneLogo} style={{height: '5%', resize: 'vertical', width: '4%', alignSelf: 'left', marginLeft: '2%', marginBottom: '2%'}}/>
            <h3 style={{color: 'black', marginLeft: '2%'}}>+34614939267</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
