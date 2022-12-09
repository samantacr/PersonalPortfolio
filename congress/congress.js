import { senators } from "../films/data/senators.js";
import { representatives } from "../films/data/representatives.js";
import { removeChildren } from "../utils/index.js";

const allCongressMembers = [...senators, ...representatives] //modern way to combine arrays

const membersDiv = document.querySelector('.membersDiv')

const houseButton = document.querySelector('#house')
const senateButton = document.querySelector('#senate')

const seniorMemberSpan = document.querySelector('#seniorMember')
const vacationerSpan = document.querySelector('#vacationer')


const mostSeniorMember = simplifiedMembers(allCongressMembers).reduce((acc, member) => {
return acc.seniority > member.seniority ? acc : member
})

const biggestVacationer = simplifiedMembers(allCongressMembers).reduce((acc, member) => {
return acc.missedVotesPct > member.missedVotesPct ? acc : member
})

seniorMemberSpan.textContent = mostSeniorMember.name
vacationerSpan.textContent = biggestVacationer.name

function simplifiedMembers(memberArray) {
    return memberArray.map(member => {
        const middleName = member.middle_name ? ` ${member.middle_name} ` :
        `` // Ternary operator FTW
        return {
            id: member.id,
            name: `${member.first_name}${middleName}${member.last_name}`,
            dateOfBirth: member.date_of_birth,
            gender: member.gender,
            party: member.party,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${member.govtrack_id}-200px.jpeg`,
            seniority: +member.seniority,
            missedVotesPct: member.missed_votes_pct,
            loyaltyPct: member.votes_with_party_pct
        }
        
   })
}

const simplifiedSenators = simplifiedMembers(senators)
const simplifiedReps = simplifiedMembers(representatives)


function populateMembersDiv(memberArray) {
    removeChildren(membersDiv)
    memberArray.forEach(member => {
        const figure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = member.imgURL
        figImg.addEventListener('error', () => figImg.src = '../images/emperor-palpatine.png')

        figCaption.textContent = member.name

        figure.appendChild(figImg)
        figure.appendChild(figCaption)
        membersDiv.appendChild(figure)
    })
}    

