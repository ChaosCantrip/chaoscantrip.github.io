const james = document.getElementById("james");

const handleOnMove = e => {
    const p = e.clientX / window.innerWidth * 100;
    james.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]);
