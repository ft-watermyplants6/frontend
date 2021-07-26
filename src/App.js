import './App.css';

function App() {
  return (
    <div>
      <AddPlant>

      </AddPlant>
      <nav className="home-login-subscribe">
                    <a href="index.html">HOME</a>
                    <a href="index.html">LogIn/Out</a>
                    <a href="index.html">Subscribe</a>
                    <Link to={'/add'}>
                        <button id="add-plant">Add a Plant</button>
                    </Link>
                    <Link to={'/edit'}>
                        <button id="edit-plant">Edit a Plan</button>
                    </Link>
                </nav>

    </div>
  );
}

export default App;
