
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



const generateProfile = function(employee) {
     //console.log(employee.getRole())
    if (employee.getRole() === 'Manager') {
        return `
        <!-- column 1 manager-->
        <div class="col-lg-4 col-md-6 col-sm-12">
            <div class="card mb-5 mx-auto" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-mug-hot p-1"></i>Manager</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border border-grey">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${employee.email}" target="_blank" rel="noopener noreferrer" class="card-link"> ${employee.email}</a></li>
                        <li class="list-group-item">Office Number:${employee.officeNumber} </li>
                    </ul>
                </div>
              </div>
        </div>
        <!-- column 1 manager end -->
        
         `
    }
    if (employee.getRole() === 'Engineer') {
        return `
        <!-- Engineer column start-->
            <div class="col-lg-4 col-md-6 col-sm-12">
                <div class="card mb-5 mx-auto" style="width: 18rem;">
                    <div class="card-header bg-primary text-white">
                        <h5 class="card-title">${employee.name}</h5>
                        <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-glasses p-1"></i>Engineer</h6>
                    </div>
                    <div class="card-body">
                        <ul class="list-group list-group-flush border border-grey">
                            <li class="list-group-item">ID:${employee.id}</li>
                            <li class="list-group-item">Email:<a href="mailto:${employee.email}" target="_blank" rel="noopener noreferrer" class="card-link"> ${employee.email}</a></li>
                            <li class="list-group-item">GitHub:<a href="https://github.com/${employee.github}" target="_blank" class="card-link"> ${employee.github}</a></li>    
                        </ul>
                    </div>
                  </div>
            </div>
            <!-- Engineer column end-->
        `
    }
    if (employee.getRole() === 'Intern') {
        
        return `
        <!-- intern column start -->
        <div class="col-lg-4  col-md-6 col-sm-12">
            <div class="card mb-5 mx-auto" style="width: 18rem;">
                <div class="card-header bg-primary text-white">
                    <h5 class="card-title">${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-white"><i class="fas fa-user-graduate p-1"></i>Intern</h6>
                </div>
                <div class="card-body">
                    <ul class="list-group list-group-flush border border-grey">
                        <li class="list-group-item">ID: ${employee.id}</li>
                        <li class="list-group-item">Email:<a href="mailto:${employee.email}" target="_blank" rel="noopener noreferrer" class="card-link"> ${employee.email}</a></li>
                        <li class="list-group-item">School: ${employee.school}</li>    
                    </ul>
                </div>
              </div>
        </div>
        <!-- intern column end -->
        `
    }
}

// ***** this should be an employee obj array???
const createPageTemplate = function(employeeArr) {
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

        <!-- loop over employee arrray and generate profile for each employee -->
        <!-- using .map we are looping over teh employee array and and sending each employee to generateProfile(), once the html is created for each we are .join() all those html template strings to create the completed html temmplet -->
            ${ employeeArr.map(employee => generateProfile(employee)).join('')}
        </div>
    </div>
</body>
</html>
    `

}


module.exports = createPageTemplate