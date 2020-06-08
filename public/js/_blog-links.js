// functions to target a link in a card Blog
const blogItems = document.querySelectorAll("events");
const targetLink = () => {
    try {
        blogItems.forEach( blogItem => {
            blogItem.addEventListener('click', ($evnt) => {
                console.log(blogItem.children)
                blogItem.children[1].click();
            });
        })
    }
    catch(err) {
        return err;
    }
}

// function call
targetLink();
