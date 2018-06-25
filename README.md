# Instructor Candidate Debugging Challenge

The goal of this challenge is to imitate a student/teacher interaction for an instructor candidate. The setting is as follows: the "student" brings some code they are working on to the "instructor", who will go through various errors to help the student achieve some desired functionality. In this case, the student is trying to implement a `POST` request on an api (you'll want to look at/run the [Backend Repo](https://github.com/learn-co-curriculum/instructor-candidate-debugging-challenge-backend)) which loads comments for the student's pre-existing [Gravatar Generator](https://github.com/learn-co-curriculum/js-gravatar-creator).

The idea is that we can simultaneously assess a candidate's debugging skills and their ability to be patient with students and give thorough, precise explanations.

You can find a fully functional version of the app in the `solution` branch. However, we want the candidate to go through the following steps, fixing each bug to help the student create a functional comment form. (You can cycle through branches to see potential pathways to a working solution. We expect every interview to be different)

1. Form listener is set on the wrong form (`master` branch)
2. Student forgets `event.preventDefault()` (`after-step-1` branch)
3. Student doesn't get input value correctly (`after-step-2` branch)
4. Student uses result of fetch improperly (`after-step-3` branch)
5. Student doesn't clear comment container when loading new comments (`after-step-4` branch)
6. Ask for feedback on code (`solution` branch, we may end up making a `dirty-solution` branch in the future but I think the code in `identicon.js` is gnarly enough)
