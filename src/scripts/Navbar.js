// navbar.js
// let isNavbarAppended = false;
function appendNavbar() {
  // Check if the navbar is already appended
  // if (isNavbarAppended) {
  //   return; // Do nothing if the navbar is already appended
  // }

  // Create the navbar HTML content
  let navbarContent = `<div class="overflow-hidden relative  md:flex w-[100%] h-20 bg-purple justify-center items-center">
   <div style="flex-grow: 1;"></div>
  <div aria-label="logo" type="button" id="logo-link" class="flex justify-center z-10 font-mono cursor-pointer text-3xl font-bold">
    Metodo
  </div>
  <svg id="10015.io" class="transform -translate-x-full translate-y-20 transition-all absolute h-10px w-[30%]" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
    <path fill="#a88bd1" d="M381.5,350.5Q312,461,215.5,394.5Q119,328,117,238.5Q115,149,210,94.5Q305,40,378,140Q451,240,381.5,350.5Z" />
  </svg>
  <div style="flex-grow: 1;"></div>
  <ul class="links flex flex-row sm:flex-column w-[100%] sm:w-[50%] font-bold z-10 text-color-a justify-evenly items-center">
    <li><a class="link" id="create-link">Create</a></li>
    <li><a class="link" id="previous-todos-link">Previous List</a></li>
    <li><a class="link" id="about-link">About</a></li>
    <li>
      <a title="profile" id="profile-link">
        <svg  width="40px" height="40px" viewBox="0 0 61.7998 61.7998" xmlns="http://www.w3.org/2000/svg">
          <title/>
          <g data-name="Layer 2" id="Layer_2">
            <g data-name="—ÎÓÈ 1" id="_ÎÓÈ_1">
              <circle cx="30.8999" cy="30.8999" fill="#ffc200" r="30.8999"/>
              <path d="M52.587 52.908a30.895 30.895 0 0 1-43.667-.291 9.206 9.206 0 0 1 4.037-4.832 19.799 19.799 0 0 1 4.075-2.322c-2.198-7.553 3.777-11.266 6.063-12.335 0 3.487 3.265 1.173 7.317 1.217 3.336.037 9.933 3.395 9.933-1.035 3.67 1.086 7.67 8.08 4.917 12.377a17.604 17.604 0 0 1 3.181 2.002 10.192 10.192 0 0 1 4.144 5.22z" fill="#677079" fill-rule="evenodd"/>
              <path d="M24.032 38.68l14.92.09v3.437l-.007.053a2.784 2.784 0 0 1-.07.462l-.05.341-.03.071c-.966 5.074-5.193 7.035-7.803 8.401-2.75-1.498-6.638-4.197-6.947-8.972l-.013-.059v-.2a8.897 8.897 0 0 1-.004-.207c0 .036.003.07.004.106z" fill="#f9dca4" fill-rule="evenodd"/>
              <path d="M38.953 38.617v4.005a7.167 7.167 0 0 1-.095 1.108 6.01 6.01 0 0 1-.38 1.321c-5.184 3.915-13.444.704-14.763-5.983z" fill-rule="evenodd" opacity="0.11"/>
              <path d="M18.104 25.235c-4.94 1.27-.74 7.29 2.367 7.264a19.805 19.805 0 0 1-2.367-7.264z" fill="#f9dca4" fill-rule="evenodd"/>
              <path d="M43.837 25.235c4.94 1.27.74 7.29-2.368 7.263a19.8 19.8 0 0 0 2.368-7.263z" fill="#f9dca4" fill-rule="evenodd"/>
              <path d="M30.733 11.361c20.523 0 12.525 32.446 0 32.446-11.83 0-20.523-32.446 0-32.446z" fill="#ffe8be" fill-rule="evenodd"/>
              <path d="M21.047 22.105a1.738 1.738 0 0 1-.414 2.676c-1.45 1.193-1.503 5.353-1.503 5.353-.56-.556-.547-3.534-1.761-5.255s-2.032-13.763 4.757-18.142a4.266 4.266 0 0 0-.933 3.6s4.716-6.763 12.54-6.568a5.029 5.029 0 0 0-2.487 3.26s6.84-2.822 12.54.535a13.576 13.576 0 0 0-4.145 1.947c2.768.076 5.443.59 7.46 2.384a3.412 3.412 0 0 0-2.176 4.38c.856 3.503.936 6.762.107 8.514-.829 1.752-1.22.621-1.739 4.295a1.609 1.609 0 0 1-.77 1.214c-.02.266.382-3.756-.655-4.827-1.036-1.07-.385-2.385.029-3.163 2.89-5.427-5.765-7.886-10.496-7.88-4.103.005-14 1.87-10.354 7.677z" fill="#8a5c42" fill-rule="evenodd"/>
              <path d="M19.79 49.162c.03.038 10.418 13.483 22.63-.2-1.475 4.052-7.837 7.27-11.476 7.26-6.95-.02-10.796-5.6-11.154-7.06z" fill="#434955" fill-rule="evenodd"/>
              <path d="M36.336 61.323c-.41.072-.822.135-1.237.192v-8.937a.576.576 0 0 1 .618-.516.576.576 0 0 1 .619.516v8.745zm-9.82.166q-.622-.089-1.237-.2v-8.711a.576.576 0 0 1 .618-.516.576.576 0 0 1 .62.516z" fill="#e6e6e6" fill-rule="evenodd"/>
            </g>
          </g>
        </svg>
      </a>
    </li>
  </ul>
  <svg id="10015.io" class="transform translate-y-6 translate-x-20 transition-all absolute h-10px w-[10%]" viewBox="0 0 480 480" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
    <path fill="#a88bd1" d="M381.5,350.5Q312,461,215.5,394.5Q119,328,117,238.5Q115,149,210,94.5Q305,40,378,140Q451,240,381.5,350.5Z" />
  </svg>
</div>`
    ;

  // Select the element with the specified class
  const navbarElement = document.getElementById("navbar");

  // Append the navbar content to the selected element
  navbarElement.innerHTML = navbarContent;

  // Show the navbar with a smooth fade-in transition
  navbarElement.style.opacity = "1";

  // Set the caching flag to true to prevent re-rendering the navbar
  // isNavbarAppended = true;
}


export default appendNavbar;