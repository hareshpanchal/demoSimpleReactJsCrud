// import Languages from './components/languages';
import "bootswatch/dist/darkly/bootstrap.min.css";
import './App.css';
// import ShopContextProvider from "./contexts/ShopContext";
// import ShowProducts from "./components/showProducts";
// import Nav from './components/Nav2';
// import ThemeContextProvider from './contexts/ThemeContext';
import Navbar from "./components/Navbar";
import ContactDataProvider from "./Context/ContactData";
import Contacts from './components/Contacts';
import ContactForm from './components/ContactForm';




function App() {
  return (
    // <div className="container mt-5">
    <>
     
    <Navbar />
    <div className="container mt-5">
    <h4> Demo Project for Adding Contact </h4>
<ContactDataProvider>
  <ContactForm />
<Contacts />
</ContactDataProvider>  


      {/* <Languages /> */}

      {/* <ShopContextProvider>
        <Nav />
        <ThemeContextProvider>
           <ShowProducts />
        </ThemeContextProvider>
      </ShopContextProvider> */}
    </div>
    </>
    // Done till Page no. 35 and Time 49:56
    // Done till Page no. 87 and Time 1:48:56
    // Done till Page no. 152  and Time 2:40:18
  );
}

export default App;
