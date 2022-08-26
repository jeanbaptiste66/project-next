
import { Routes, Route, Link } from 'react-router-dom';
import Accueil from './containers/Accueil';
import Produits from './containers/Products';
import Services from './containers/Services';
import About from './containers/About';
import Blog from './containers/blog/Blog';
import Layout from './Components/Layout'
import EditPostForm from'./containers/blog/EditPostForm'
import SinglePostPage from './containers/blog/SinglePostPage'
import PostsList from './features/posts/PostsList'
import AddPostForm from './features/posts/AddPostForm';



function App() {
  return (
    <div classNameName="App">
<nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Surf Magazine</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <a className="nav-link active" href="/">Accueil
            <span className="visually-hidden">(current)</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Products">Produits</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/About">À propos</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle show text-dark" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Actualités</a>
          <div className="dropdown-menu" data-bs-popper="static">
            <a className="dropdown-item text-dark nav-link" href="/ReadPost" style={{color :"black"}}><Link to="/ReadPost">Blog</Link></a>
            <a className="dropdown-item text-dark nav-link" href="/CreatePost" style={{color :"black"}}><Link to="/CreatePost">Création article</Link></a>
          </div>
        </li>        
      </ul>      
    </div>
  </div>
</nav> 
<Routes>
    <Route path='/' element= {<Accueil />} />
    <Route path='/Products' element= {<Produits />} />
    <Route path='/Services' element= {<Services />} />
    <Route path='/About' element= {<About />} />
    <Route path='/Blog' element= {<Blog />} />

    <Route path="/Blog" element={<Layout />} >
        <Route index element={<PostsList />} />
        </Route>
        <Route path="/blog">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
          </Route>
  


</Routes>



</div>


  );
}

export default App;