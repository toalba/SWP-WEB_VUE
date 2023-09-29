// We dont do js in html. ohboy! 
// This is the main js file for the site.

var team1 = [];
var team2 = [];

var curr_target;

function change_teams(e)
{
    let teams_sel = e.target; //which team is now selected
    let v = teams_sel.value; //get the value of the selected team for further queries
    let t = teams_sel.options[teams_sel.selectedIndex].text; //which text is associated with the value
    console.log(v + t + e);

    let team_members_sel = document.getElementById("team_members")
    let current_players = players.filter(p => p.Club === t); //get all players of the selected team
    console.log(current_players);
    team_members_sel.innerHTML = ""; //clear the player option box
    current_players.forEach(d => team_members_sel.add(new Option(d.Name,d.ID))); //add all players to the option box
}

function change_team_player(e)
{
    let player_sel = e.target;
    let v = player_sel.value;
    let t = player_sel.options[player_sel.selectedIndex].text;

    let curr_player = curr_target = players.find(p => p.Name === t);
    let player_img = document.getElementById("player_img");
    player_img.src = curr_player.Photo;
    document.getElementById("player_value").innerHTML = curr_player.Value;
    document.getElementById("player_potential").innerHTML = curr_player.Potential;
    document.getElementById("player_club").src = curr_player["Club Logo"];
    document.getElementById("player_nat").src = curr_player.Flag;

}

function on_addteam1(e)
{
    if (!team1.includes(curr_target) || team2.includes(curr_target)) {
        team1.push(curr_target);
        build_table();
    }
}
function on_addteam2(e)
{
    if (!team2.includes(curr_target) || team1.includes(curr_target)) {
        team2.push(curr_target);
        build_table();
    }
}


function build_table(e) {
    tbody = document.getElementById("table-team");
    // get the longest team
    let longest = Math.max(team1.length, team2.length);
    // clear the table
    tbody.innerHTML = "";
    // build the table
    for (let i = 0; i < longest; i++) {
        let row = tbody.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        if (i < team1.length) {
            cell1.innerHTML = team1[i].Name;
        }
        if (i < team2.length) {
            cell2.innerHTML = team2[i].Name;
        }
    }

}

function on_clearselected(e) {
    pool = team1.filter(p => p == curr_target);
    pool.forEach(p => {
        team1.splice(team1.indexOf(p), 1);
    });
    pool = team2.filter(p => p == curr_target);
    pool.forEach(p => {
        team2.splice(team2.indexOf(p), 1);
    });
    build_table();    
}

//fill the teams option box with the team names
let teams_sel = document.getElementById("teams");
teams.forEach(d => teams_sel.add(new Option(d.Name,d.ID)));
teams_sel.addEventListener("change", change_teams);

let team_members_sel = document.getElementById("team_members");
team_members_sel.addEventListener("change", change_team_player); //this is another way how to add an eventlistener to the option box