
// html template helper code 

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

//************ 
// loop through array of employee objects and generate page????

const generateProfile = function(employeeType) {
    if (employeeType === 'Manager'||'manager') {
        return `
        <!-- column 1 manager-->
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-5 mx-auto" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${employeeType.name}</h5>
                    <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-mug-hot p-1"></i>Manager</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border border-grey">
                        <li class="list-group-item">ID: ${employeeType.id}</li>
                        <li class="list-group-item">Email:<a href="#" class="card-link"> ${employeeType.email}</a></li>
                        <li class="list-group-item">Office Number:${employeeType.officeNumber} </li>
                    </ul>
                </div>
              </div>
        </div>
        <!-- column 1 manager end -->
        
        `
    }
    if (employeeType === 'Engineer' ||'engineer') {
        return `
        <!-- Engineer column start-->
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card mb-5 mx-auto" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${employeeType.name}</h5>
                        <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-glasses p-1"></i>Engineer</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border border-grey">
                            <li class="list-group-item">ID:${employeeType.id}</li>
                            <li class="list-group-item">Email:<a href="#" class="card-link"> ${employeeType.email}</a></li>
                            <li class="list-group-item">GitHub:<a href="#" class="card-link"> ${employeeType.github}</a></li>    
                        </ul>
                    </div>
                  </div>
            </div>
            <!-- Engineer column end-->
        `
    }
    if (employeeType === 'Intern' ||'intern') {
        
        return `
        <!-- intern column start -->
        <div class="col-lg-4  col-md-6 col-sm-12">
            <div class="card mb-5 mx-auto" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${employeeType.name}</h5>
                    <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-user-graduate p-1"></i>Intern</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border border-grey">
                        <li class="list-group-item">ID: ${employeeType.id}</li>
                        <li class="list-group-item">Email:<a href="#" class="card-link"> ${employeeType.email}</a></li>
                        <li class="list-group-item">School:${employeeType.school}</li>    
                    </ul>
                </div>
              </div>
        </div>
        <!-- intern column end -->
        `
    }
}

// ***** this should be an employee obj array???
const createPageTemplate = function(employeeObj) {
return `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Portfolio Demo</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <div class="row justify-content-center">
        <header class="col-12 p-5 mb-5 text-center bg-danger text-white"><h3>My Team</h3></header>

        // if array.length is greater than length of employee array then genereate profiles????
            ${generateProfile(employeeObj)}
        </div>
    </div>
</body>
</html>
    `

}

module.exports = createPageTemplate