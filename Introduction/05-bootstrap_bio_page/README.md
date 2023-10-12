# Lab Instructions: Improve your Bio page with Bootstrap

In this graded assessment, you will revise your biographical page to use Bootstrap.<br><br>

### Goal
- Use Bootstrap to build your biographical page.

### Objectives
- Add a Bootstrap Grid to the page.
- Set up the grid so that the content will layout correctly on both mobile and desktop.
- Configure your photo to be responsive.
- Change the Meta profile link to use a Bootstrap button style.

### Instructions:
Step 1. Open index.html

Step 2.  Add a div element to the body element.

Step 3: Apply the Bootstrap container CSS class to the div.

Step 4: Add a div element to the container element.

Step 5:  Apply the Bootstrap row CSS class to the div..

Step 6:  Add two div elements to the row element.

Step 7: On the first div element apply the id attribute with the value bio.

Step 8: Apply the id attribute on the second div element with the value more.

Step 9: Apply the correct CSS classes so that each div with be 12 columns wide on mobile and 6 columns wide on desktop.

Step 10: Apply the text-center CSS class on the bio div element.

Step 11: Add an h1 heading containing your name as the text inside the bio div element.
```HTML
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
            </div>
            <div id="more" class="col-12 col-lg-6">
            </div>
        </div>
    </div>
```

Step 12: Add an img element for photo.jpg below the h1 element.

Step 13: Apply the img-fluid CSS class to the img element.

Step 14: Add an h2 heading containing the text Favorite Music Artists inside the more div element.
```HTML
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
            </div>
        </div>
    </div>
```

Step 15: Add an unordered list of your favorite music artists below the h2 heading.

Step 16: Add another h2 heading containing the text Favorite Films below the favorite music artists list.
```HTML
     <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
            </div>
        </div>
     </div>
```

Step 17: Add an ordered list of your top 5 films after the Favorite Films heading.

Step 18: Add an anchor tag after the ordered list.

Step 19:  Link to your Meta profile in the anchor tag.
```HTML
    <div class="container">
        <div class="row">
            <div id="bio" class="col-12 col-lg-6 text-center">
                <h1>Jane</h1>
                <img src="photo.jpg" class="img-fluid">
            </div>
            <div id="more" class="col-12 col-lg-6">
                <h2>Favorite Music Artists</h2>
                <ul>
                    <li>Metallica</li>
                    <li>Bob Marley</li>
                    <li>Madonna</li>
                    <li>The Beatles</li>
                    <li>Pink Floyd</li>
                </ul>
                <h2>Favorite Films</h2>
                <ol>
                    <li>Pulp Fiction</li>
                    <li>The Godfather</li>
                    <li>The Lord of the Rings</li>
                    <li>Iron Man</li>
                    <li>Inception</li>
                </ol>
                <a href="https://www.meta.com/user/12"></a>
            </div>
        </div>
    </div>
```

Step 20: Set the anchor text to display My Meta Profile.
  
Step 21: Apply the button Bootstrap component CSS class to the anchor tag.

Step 22: Apply the primary modifier to the button component.

### Tips

- Remember the responsive breakpoints in Bootstrap. Use the correct infixes where appropriate.
- Component modifiers are specified using suffixes.
- Use the Browser Preview to check your progress.
- Review the lessons Using Bootstrap Styles, Bootstrap Grid and Bootstrap Components.
