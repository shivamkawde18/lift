document.addEventListener("DOMContentLoaded", () => {
  let floor;
  let lift;
  let targetedFloor;
  let prevFloor;
  let upFloor;
  document.getElementById("floor").onchange = (e) => {
    floor = e.currentTarget.value;
  };
  document.getElementById("lift").onchange = (e) => {
    lift = e.currentTarget.value;
  };
  document.getElementById("submit-button").onclick = () => {
    console.log(floor, lift);
    createFloor();
    document.documentElement.scrollTop = document.documentElement.scrollHeight;
  };

  const createFloor = () => {
    let i = floor;
    while (i > 0) {
      // Create the parent div element
      const parentDiv = document.createElement("div");
      parentDiv.style.display = "flex";
      parentDiv.style.flexDirection = "column";
      const containerDiv = document.createElement("div");
      const buttonContainerDiv = document.createElement("div");
      const placeLift = document.createElement("div");
      placeLift.className = "placeLift";
      buttonContainerDiv.style.display = "flex";
      buttonContainerDiv.style.gap = "10px";
      const downBtn = document.createElement("button");
      downBtn.style.height = "30px";
      downBtn.style.width = "100px";
      downBtn.innerText = "Down";
      const upBtn = document.createElement("button");
      const currentFloor = document.createElement("h3");
      currentFloor.innerText = `floor - ${i}`;
      currentFloor.title = i;
      upBtn.style.height = "30px";
      upBtn.style.width = "100px";
      upBtn.innerText = "Up";
      upBtn.addEventListener("click", () => {
        console.log(prevFloor, "pre");
        targetedFloor = parseInt(currentFloor.title);
        if (
          prevFloor <= targetedFloor ||
          prevFloor == undefined ||
          prevFloor === targetedFloor
        ) {
          console.log(currentFloor.title, "trget");

          let temp = targetedFloor;

          console.log(targetedFloor - 1, "k");
          while (temp > 0) {
            const ele = document.getElementsByClassName("lift");
            const pp = document.getElementsByClassName("placeLift");
            const reversedElements = Array.from(pp).reverse();
            if (prevFloor !== targetedFloor) {
              const offsetLeft =
                reversedElements[targetedFloor - 1].offsetLeft -
                ele[0].offsetLeft;
              const offsetTop =
                reversedElements[targetedFloor - 1].offsetTop -
                ele[0].offsetTop;

              // Apply the translation using CSS transform property
              ele[0].style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
              // setTimeout(function () {
              //   ele[0].parentNode.removeChild(ele[0]);
              // }, 1000);
            } else {
              const offsetLeft =
                reversedElements[targetedFloor].offsetLeft - ele[0].offsetLeft;
              const offsetTop =
                reversedElements[targetedFloor].offsetTop - ele[0].offsetTop;

              // Apply the translation using CSS transform property
              ele[0].style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
            }
            temp--;
          }
        } else {
          alert("please go down");
        }
        prevFloor = targetedFloor;
      });

      downBtn.addEventListener("click", () => {
        console.log(upFloor, "up");
        targetedFloor = parseInt(currentFloor.title);
        //  if(upFloor<=targetedFloor||upFloor==undefined||upFloor===targetedFloor){
        console.log(currentFloor.title, "trget");

        let temp = targetedFloor;

        console.log(targetedFloor - 1, "k");
        while (temp > 0) {
          const ele = document.getElementsByClassName("lift");
          const pp = document.getElementsByClassName("placeLift");
          const reversedElements = Array.from(pp).reverse();
          if (upFloor !== targetedFloor) {
            const offsetLeft =
              reversedElements[targetedFloor - 1].offsetLeft -
              ele[0].offsetLeft;
            const offsetTop =
              reversedElements[targetedFloor - 1].offsetTop +
              reversedElements[targetedFloor - 1].offsetHeight -
              ele[0].offsetTop;

            // Apply the translation using CSS transform property
            ele[0].style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
          } else {
            console.log("kha");
            const offsetLeft = pp[targetedFloor].offsetLeft - ele[0].offsetLeft;
            const offsetTop =
              pp[targetedFloor].offsetTop +
              pp[targetedFloor].offsetHeight -
              ele[0].offsetTop;

            // Apply the translation using CSS transform property
            ele[0].style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;
          }
          temp--;
        }

        // }
        // else{
        //   alert("please go down")
        // }
        upFloor = targetedFloor;
      });

      buttonContainerDiv.appendChild(upBtn);
      buttonContainerDiv.appendChild(downBtn);
      const floorLine = document.createElement("div");
      floorLine.style.height = "200px";
      floorLine.style.width = "3px";
      floorLine.style.backgroundColor = "red";
      const floorBaseLine = document.createElement("div");
      floorBaseLine.style.height = "3px";
      floorBaseLine.style.width = "100%";
      floorBaseLine.style.backgroundColor = "yellow";
      floorBaseLine.style.marginBottom = "30px";
      const parentLift = document.createElement("div");
      parentLift.style.display = "flex";
      parentLift.style.gap = "20px";
      containerDiv.appendChild(currentFloor);
      containerDiv.appendChild(buttonContainerDiv);

      let l = 1;
      if (i === 1 || floor == 1) {
        while (l > 0) {
          const lifts = document.createElement("div");
          lifts.className = "lift";
          // lifts.style.top = "350px";
          lifts.style.height = "200px";
          lifts.style.width = "100px";
          lifts.style.backgroundColor = "red";
          parentLift.appendChild(lifts);
          containerDiv.appendChild(parentLift);
          l--;
        }
      }
      containerDiv.appendChild(placeLift);
      containerDiv.appendChild(floorLine);

      containerDiv.appendChild(floorBaseLine);
      // containerDiv.appendChild(buttonContainerDiv);

      parentDiv.appendChild(containerDiv);

      document.body.appendChild(parentDiv);

      i--;
    }
  };
});
