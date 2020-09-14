particlesJS.load('particles-js', 'particles.json');

var ctxFront = document.getElementById("radarFront");
var radarFront = new Chart(ctxFront, {
    type: 'radar',
    data: {
      labels: ["HTML", "CSS", "REACT", "BOOTSTRAP"],
      datasets: [
        {
          label: "Front",
          fill: true,
          backgroundColor: "rgba(243,72,75,0.2)",
          borderColor: "rgba(243,72,75,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(243,72,75,1)",
          data: [
              3.5,
              3,
              4,
              3.5]
        }]
    },
    options: {
        scale: {
            ticks: {
              min: 0,
              max: 5
            }
        },
      title: {
        display: true,
        text: 'Compétences Front'
      }
    }
});

var ctxBack = document.getElementById("radarBack");
var radarBack = new Chart(ctxBack, {
    type: 'radar',
    data: {
      labels: ["C#", "Java", "Javacript", "TypeScript", "SQL"],
      datasets: [
        {
          label: "Back",
          fill: true,
          backgroundColor: "rgba(47,70,222,0.2)",
          borderColor: "rgba(47,70,222,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(47,70,222,1)",
          data: [
              4,
              3.5,
              3,
              3.5,
              2,5]
        }]
    },
    options: {
        scale: {
            ticks: {
              min: 0,
              max: 5
            }
        },
      title: {
        display: true,
        text: 'Compétences Back'
      }
    }
});


var ctxSoftware = document.getElementById("radarSoftware");
var radarSoftware = new Chart(ctxSoftware, {
    type: 'radar',
    data: {
      labels: ["VS CODE", "VS STUDIO", "SSMS", "Notepad++", "Office"],
      datasets: [
        {
          label: "Logiciels",
          fill: true,
          backgroundColor: "rgba(0,153,0,0.2)",
          borderColor: "rgba(0,153,0,1)",
          pointBorderColor: "#fff",
          pointBackgroundColor: "rgba(0,153,0,1)",
          data: [
              3,
              4,
              2.5,
              3,
              3]
        }]
    },
    options: {
        scale: {
            ticks: {
              min: 0,
              max: 5
            }
        },
      title: {
        display: true,
        text: 'Compétences Logiciels'
      }
    }
});