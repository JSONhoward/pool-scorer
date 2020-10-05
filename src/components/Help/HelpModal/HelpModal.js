import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'

const StyledHeading = styled.p`
font-size: 1.5rem;
text-decoration: underline;
margin-bottom: .5rem;
`

const StyledP = styled.p`
font-style: italic;
font-size: .75rem;
color: yellow;
`

const Rules = styled.div`
overflow: auto;
padding: .5rem;
width: 100%;
`

const Close = styled.div`
position: absolute;
top: .5rem;
right: .5rem;
cursor: pointer;
`

const HelpModalStyled = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
display: ${props => props.open ? 'flex' : 'none'};
flex-direction: column;
align-items: center;
justify-content: center;
height: 300px;
width: 300px;
font-family: 'Cabin', sans-serif;
color: white;
background-color: rgb(0,0,0,.9);
border-radius: 10px;
padding: .5rem;

a {
    color: blue;
    text-decoration: none;
    font-size: 1.25rem;
}
`

const HelpModal = ({ open, page, handler }) => {

    return (
        <HelpModalStyled open={open}>
            <Close data-testid='closeButton' onClick={handler}><FaTimes tabIndex='0' size={'2rem'} /></Close>
            <StyledP>*edit names by clicking on player names</StyledP>
            <StyledHeading>Rules</StyledHeading>
            {
                page === 'eo' &&
                <Rules>
                    <p>To understand equal offense pool rules you must be familiar with the 14.1 continuous billiard rules. It should be noted that since there is no head-to-head play, there are no safeties in equal offense pool rules. The object of the game in Equal offense pool rules is to score a higher number of total points than your opponent(s) in the specified, predetermined number of innings. Typically, equal offense billiard rules call for a 10 inning, 200 point maximum. In equal offense billiards, each player gets 10 turns alone at the table. An open break on a full rack begins each turn. A foul, a run of 20, or a miss causes the turn to come to an end.
            </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        Players shoot in an order which is determined by the scoring results of preceding innings. The equal offense billiard player with the highest score shall shoot first. If there is a tie in a score between two players, there is no order change from previous.
            </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        Any balls pocketed on the open break are re-spotted and play it started with ball in hand from the kitchen. If a player scratches on the break shot, there is no penalty incurred for his or her action. Although players are able to keep all points when they make a foul, the actual act of making the foul signifies the end of their turn. Any balls made on a foul are not counted.
            </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        The balls are racked just as they would be racked in a standard 15 ball triangle. Equal offense billiards can be played by any number of players from two on upward. Any legally pocketed ball gains the shooter one point. The opening break shot is take at the beginning of each player's inning. The shooting player has free break, meaning that there are no special rules about sending balls to cushions, and there are no penalties for scratched or jumped balls.
            </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        When shooting, players must designate an object ball, a pocket, and call the shot before executing. There is no requirement for indicating carom shots, combination shots, and cushions, all of which are legal. Any ball which is legally pocketed entitles the shooting player to continue his or her inning at the table. Players stay at the table until they miss a ball or until they attain the maximum total points per inning allowed, which is typically 20 points in championship equal offense billiard play. Any additional pocketed balls resulting from a shot are legal as long as they are called before the shot is executed.
            </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        If there is a tie between players for the high match score, those tied players shall partake in additional innings. The win goes to the first player to post a superior score to that of his or her opponent(s) in an equal number of innings. This is essentially a "sudden death" round.</p>
                    <a href='http://www.billiardsforum.com/pool-rules/equal-offense-billiard-rules' target='_blank' rel="noopener noreferrer">source: billiardsforum.com</a>
                </Rules>
            }
            {
                page === 'fargo' &&
                <Rules>
                    <p>
                        1. TYPE OF GAME: FARGO is a game that consists of 10 innings (or frames). The player’s game score is the total of the scores for these 10 innings. In each inning, the player scores points until he either misses or succeeds in shooting all 15 balls. Fargo is a challenging game, with aspects of both straight pool and rotation, and is suitable for both beginner and expert players.
                <br />
                        <br />
                    2. PLAYERS: Any number of players can compete.
                    <br />
                        <br />
                    3. BALLS USED: A standard set of balls, 1-15, plus the cue ball.
                    <br />
                        <br />
                    4. THE RACK: A standard triangle rack is used. The balls are racked at the beginning of each inning for each player. The player may choose to rack his own balls and to place balls in the rack in any order that he believes is to his advantage.
                    <br />
                        <br />
                    5. OBJECT OF THE GAME: To score more total points than the opponents in a predetermined number of innings (300 points is the maximum in a 10 inning game).
                    <br />
                        <br />
                    6. SCORING: Each inning consists of a “random phase” and a “rotation phase”. In the beginning of each inning the player places a coin on the table rail with the heads up (or some other conspicuous marking device may be used, such as a piece of paper with “random” written on one side and “rotation” on the other). Balls are then pocketed in any order (i.e. in “random” order) and they count one point each. At any time during the inning, including before the first ball is pocketed, the player may choose to turn the coin over. This designates the beginning of the rotation phase. After the coin flip, the lowest numbered ball on the table must be contacted first (i.e. the balls are shot in “rotation”). Any legally pocketed balls after the coin flip count two points each. There is only a single coin flip each inning.
                    <br />
                        <br />
                    7. OPENING BREAK: At the start of each inning the player breaks from behind the headstring and has a free break (no special balls to cushion or other requirements once the break stroke commences, and there is no penalty for scratches or jumped balls). Any balls pocketed on the break shot or jumped off the table are spotted, and the player begins by taking ball in hand anywhere on the table.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        8. RULES OF PLAY:
                        <br />
                        8.1. Fargo is a call shot game. The player must designate the ball and call a pocket for each shot. He need not indicate kisses, caroms, combinations, or cushions (all of which are allowed). A legally pocketed ball entitles the shooter to continue at the table until he fails to pocket legally a called ball, or until he has pocketed all of the balls.
                    <br />
                        <br />
                    8.2. The player is entitled to any additional balls that are pocketed on a shot, as long as he pockets legally his called ball; the additional balls count the same as the called ball.
                    <br />
                        <br />
                    8.3. Initial playing order is determined by lag, or if several opponents are playing, by lot. Shooting order for subsequent innings is determined by the scoring results of the preceding innings – the player with the highest score shooting first. If several opponents are playing, all of the players shoot in order of their partial scores, with the higher players going first. In the event of a tied score the playing order is the same as for the previous inning. When playing on separate tables, or in separate locations as in an internet competition, the player order is determined by the Tournament Director as appropriate and practical for the situation; this includes the option of playing the entire 10 innings and reporting the scores to the Tournament Director at the end of the game.
                    <br />
                        <br />
                    9. PENALTY FOR FOULS: There is no point penalty for fouls; the player’s inning ends and any balls pocketed on the foul stroke do not count. After the coin flip (i.e. during the rotation phase), contacting first an object ball other than the lowest numbered ball (a bad hit) is a foul.
                    </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        FARGO FAQs
                    <br />
                    1 Do I have to call my shots?
                    Yes, see rule 8.1. The ball and the pocket must be designated, the other details are irrelevant, just as in Equal Offense or 14.1. Shots must be called in both the random and the rotation phases.
                    <br />
                        <br />
                    2 What if I scratch on the break?
                    See rule 7. There is no penalty for a scratch on the break, or for jumped balls.
                    <br />
                        <br />
                    3 If an extra ball slops in during the rotation phase, does it count as two points?
                    Yes, see rules 6 and 8.2. Balls pocketed legally before the coin flip (during the random phase) count one point each, balls pocketed after the coin flip (the rotation phase) count two points each.
                    <br />
                        <br />
                    4 After I turn over the coin and take a shot in the rotation phase, may I change my mind and flip it back to the random phase?
                    No, see rule 6. After the coin is flipped, you are committed to the rotation phase for the rest of that inning.
                    <br />
                        <br />
                    5 If I shoot in 14 balls in the random phase, may I flip the coin to get two points for the last ball?  Ans: Yes.
                    <br />
                        <br />
                    6 Are combinations OK in the rotation phase?
                    Yes, combinations and caroms are allowed in the rotation phase. The requirement is the same as in 9-ball, namely that you hit the lowest numbered ball first, with the addition that the ball must be designated and its pocket must be called.
                    <br />
                        <br />
                    7 What are some good strategies?
                    This depends on the player’s skill level. A beginner say someone who typically scores less than 100 should simply try to pocket all the balls he can randomly; if he gets to a point where he knows a cluster is going to stop the run, or if he runs down to the last two or three balls, only then should he consider flipping the coin. An intermediate player 100 to 200 points should clear out all the clusters and trouble balls during the random phase, and play as many balls as possible at the end of the run in rotation. An advanced player over 200 points should break out only the most difficult clusters during the random phase, and he will be able to break out the remaining clusters during the rotation phase; with a lucky break and a good spread of the balls, he may be able to play the entire 15 balls in rotation.
                    <br />
                        <br />
                    8 How do I rack the balls to make the rotation phase as easy as possible?
                    In general, the corner balls roll the farthest, balls along the sides and the rear of the rack tend to stay together, and the three balls in the middle usually don’t roll very far.On the break shot, you want a good spread of the balls to minimize the number of clusters, but not so much scatter that the nearby balls are widely separated. Experiment with both ball position in the rack and various break shots to see what works best for you.</p>
                    <a href='https://billiards.colostate.edu/instructional-articles/pb-review/fargo-test/' target='_blank' rel="noopener noreferrer">source: billiards.colostate.edu</a>
                </Rules>
            }
            {
                page === '14.1' &&
                <Rules>
                    <p>
                        1.1. OBJECT OF THE GAME.
                        <br />
                        14.1 is a nomination game. The player must nominate a ball and a pocket. The player is awarded one point for every correctly nominated and pocketed ball on a legal stroke, and is allowed to continue his turn until he either fails to pocket a nominated ball or commits a foul. The player can pocket the first 14 balls, but before he can continue his turn by shooting at the 15th (and last remaining) ball on the table, the 14 pocketed balls are racked as before, except with the apex space vacant. The player then attempts to pocket the 15th ball in a manner so that the racked balls are disturbed and he can continue his run.
                        The player who scores the predetermined point total for a game (usually 150 in major tournament play or any agreed upon total in casual play) prior to his opponent, wins the game.
                        <br />
                        <br />
                        2. PLAYERS. 2, or 2 teams.
                        <br />
                        <br />
                        3. BALLS USED. Standard set of object balls numbered 1-15, plus cue ball.
                        <br />
                        <br />
                        4. THE RACK. Standard triangle rack with the apex ball on the foot spot, 1-ball on the racker's right corner, 5-ball on left corner. Other balls are placed at random and must touch their neighbors.
                        <br />
                        <br />
                        5. SCORING. Any ball legally pocketed counts one point for the shooter.
                        <br />
                        <br />
                        6. OPENING BREAK. Starting player must either (1) designate a ball and a pocket into which that ball will be pocketed and accomplish the shot, or (2) cause the cue ball to contact a ball and then a cushion, plus cause two object balls to contact a cushion. Failure to meet at least one of the above requirements is a breaking violation. Offender's score is assessed a two point penalty for each breaking violation. In addition, the opponent has the choice of (1) accepting the table in position, or (2) having the balls reracked and requiring the offending player to repeat the opening break. That choice continues until the opening break is not a breaking violation, or until the opponent accepts the table in position. The three successive fouls rule does not apply to breaking violations.
                        <br />
                        <br />
                        If the starting player scratches on a legal opening break, he is charged with a foul and assessed a one point penalty, which applies toward the "Successive Fouls Penalties." The incoming player is awarded cue ball in hand behind the head string, with object balls in position.
                        </p>
                    <br />
                    <hr />
                    <br />
                    <p>
                        7. RULES OF PLAY.
                        <br />
                        1.- A legally pocketed ball entitles a shooter to continue at the table until he fails to legally pocket a called ball on a shot. A player may shoot any ball he chooses, but before he shoots, must designate the called ball and called pocket. He need not indicate any detail such as kisses, caroms, combinations, or cushions (all of which are legal). any additionally pocketed ball(s) on a legal stroke is scored as one point for the shooter.
                        <br />
                        <br />
                        2.- On all shots, a player must cause the cue ball to contact an object ball and then (1) pocket a numbered ball, or (2) cause the cue ball or any numbered ball to contact a cushion. Failure to meet these requirements is a foul.
                        <br />
                        <br />
                        2.- When an object ball is not frozen to a cushion, but is within a ball's width of a cushion (referee to determine by measurement if necessary), a player is permitted only two consecutive legal safeties on that ball using only the near rail. If such safety play is employed, that object ball is then considered frozen to the rail on the player's next inning. The General Rules of Pocket Billiards "Frozen Balls" requirements apply if the player chooses to make his first cue ball contact with that object ball on his third shot.
                        (Note: If a player has committed a foul on the shot immediately before or the shot immediately after playing this ball, then he must immediately meet the requirements of the "Frozen Ball" rule when playing this object ball. Also, if he has committed two consecutive fouls, he must immediately meet the requirements of the "Frozen Ball" rule when playing this object ball. If such player fails to meet the requirements of the "Frozen Ball" rule, he is considered to have committed a third successive foul and the appropriate point penalty is assessed as well as one point for each of the previous fouls. All fifteen balls are then reracked and the player committing the infraction is required to break as at the beginning of the game.)
                        <br />
                        <br />
                        3.- When the fourteenth ball of a rack is pocketed, play stops momentarily with the fifteenth ball remaining in position on the table; the fourteen pocketed balls are then racked (with the space at the foot spot vacant in the triangle). Player then continues, normally pocketing the fifteenth (or "break" ball) in such manner as to have the cue ball carom into the rack and spread the balls to facilitate the continuance of his run. However, player is not compelled to shoot the fifteenth ball; he may shoot any ball he desires.
                        <br />
                        <br />
                        4.- A player may call a safety rather than an object ball (for defensive purposes). Safety play is legal, but must comply with all applicable rules. Player's inning ends when a safety is played, and pocketed balls are not scored. Any object ball pocketed on a called safety is spotted.
                        <br />
                        <br />
                        5.- A player may not catch, touch, or in any way interfere with a ball as it travels toward a pocket or the rack area on a shot (to include catching a ball as it enters a pocket by having a hand in the pocket). If he does, he is charged with a special "deliberate foul" and is penalized one point for the foul and an additional fifteen point penalty, for a total of sixteen points. The incoming player then has choice of (1) accepting the table in position with the cue ball in hand behind the head string, or (2) having all fifteen balls reracked and requiring the offending player to shoot under the requirements of the opening break.
                        <br />
                        <br />
                        6.-If the fifteenth (unpocketed) ball of a rack and/or the cue ball interferes with the triangle being lowered straight down into position for racking, refer to the diagram , which indicates the proper manner of relocating balls. (The lined out boxes are those situations in which there is no interference, both balls remain in position.)
                        <br />
                        <br />
                        7.- When a player has the cue ball in hand behind the head string (as after a scratch) and all object balls are behind the head string, the object ball nearest the head string may be spotted at his request. If two or more balls are an equal distance from the head string, the player may designate which of the equidistant balls he desires to have spotted.
                        <br />
                        <br />
                        8. ILLEGALLY POCKETED BALLS. All spotted. No penalty.
                        <br />
                        <br />
                        9. OBJECT BALLS JUMPED OFF THE TABLE. The stroke is a foul. Any jumped ball(s) is spotted after the balls come to rest.
                        <br />
                        <br />
                        10. CUE BALL AFTER JUMPING OFF THE TABLE OR SCRATCH. Incoming player has cue ball in hand behind the head string, unless the provision of Rule of Play 7.2., 7.5. or 12." (below) apply to the offender's foul and dictate alternate choices or procedures.
                        <br />
                        <br />
                        11. PENALTIES FOR FOULS. One point deducted for each foul; NOTE: more severe penalties for deliberate fouls (Rule of Play 7.5.) and third "Successive Fouls" (12. below). Incoming player accepts cue ball in position unless foul was a jumped cue ball, pocket scratch, deliberate foul (Rule of Play 7.5.) or third successive foul.
                        <br />
                        <br />
                        12. SUCCESSIVE FOUL PENALTIES. When a player commits a foul, he is penalized one point (or more as appropriate) and a notation is made and posted by the scorer that he is "on a foul." The player remains "on a foul" until his next shot attempt, at which time he may remove the foul by successfully pocketing a called ball, or completing a legal safety. If he fails to meet these requirements on his next turn at the table, he is penalized one point. The notation is changed to "on two fouls." If he fails to meet the requirements of successfully pocketing a called ball or completing a legal safety on his third consecutive turn at the table, a penalty of fifteen points is assessed.
                        <br />
                        <br />
                        The commission of a third successive foul automatically clears the offender's record of fouls.
                        <br />
                        <br />
                        All balls are then reracked and the player committing the infraction is required to break as at the beginning of the game. Rules for the opening break apply.
                        <br />
                        <br />
                        It should be emphasized that successive fouls must be committed in successive turns (or playing attempts), not merely in successive innings. For example, if a player ends inning 6 with a foul, steps to the table for inning 7 and fouls (he is "on two fouls"), and then starts inning 8 with a legally pocketed ball before scratching on his second shot attempt of the inning, he has not committed three successive fouls, even though there were fouls in three successive innings. As soon as he legally pocketed the ball to start inning 8, he cleared the two fouls. he is, of course, "on one foul" when he plays the first stroke attempt of inning 9.
                        <br />
                        <br />
                        13. SCORING NOTE. The deduction of penalty points can result in negative scores. A running score can read "minus one," "minus two," "minus fifteen," etc. (a player can win a game with a score of 150 while his opponent has scored but two fouls. The final score would read 150 to -2.)
                        If a player fouls on a shot that has not pocketed a ball, the point penalty is deducted from his score at the end of the previous inning. If a player fouls and pockets a ball on the same shot, that ball is spotted (not scored) and the point penalty is deducted from his score at the end of the previous inning
                </p>
                    <a href='https://www.billiardworld.com/rls_141.html' target='_blank' rel="noopener noreferrer">source: billiardworld.com</a>
                </Rules>
            }
            {
                page === 'hopkins' &&
                <Rules>
                    <p>
                        Rack: To rack 15 balls on the foot spot.
                    <br /><br />
                    Inning: One turn at the table. In general when you miss it is the end of an Inning. Exceptions are noted below. The Inning score is the number of balls pocketed in this turn at the table minus any penalties.
                    <br />
                    <br />
                    1. Rack fifteen balls on the Foot Spot, in any order, and place the cue ball on the Head Spot.
                    <br /><br />
                    A miscue or missing the cue ball completely, it is a foul. Re-Rack. Break again and subtract one from the Inning score.
                    <br />
                    If there is a miscue and contact with the rack is made, player may choose to continue shooting, leaving the balls where they lie and not take a foul.
                    <br /><br />
                    2. If there is a scratch on the break subtract 1 from the Inning Score.
                    <br /><br />
                    If the cue ball leaves the table subtract 2 from the Inning Score. After a scratch on the break, place the cue ball on either the Head Spot or on the Foot Spot and shoot any ball on the table or place the cue ball anywhere behind the Head String and shoot any ball above the Head String. On the break, if player scratches or the cue ball goes off the table, all balls made on the break stay down but do not count as points towards the Inning score. If player does not scratch on the break, then all balls made on the break count as one point each.
                    <br /><br />
                    After the break, if player does not have a shot or player does not like the shot, there are three options:
                    <br /><br />
                    (1) Place the cue ball anywhere behind the Head String and shoot any ball above the Head String.
                    <br /><br />
                    (2) Place the cue ball on either the Head Spot or the Foot Spot and shoot any ball.
                    <br /><br />
                    (3) Place the rack over the cue ball (where it lies) and move the cue ball anywhere inside the rack and shoot any ball.
                    <br /><br />
                    If any of these options are used, subtract 1 from the Inning Score.
                    <br /><br />
                    3. After the break, player proceeds to shoot, calling each shot. Try to run the table, shooting the balls in any order until there are five balls remaining.
                    <br /><br />
                    The last five balls must be shot in rotation (in numerical order starting with the lowest number ball).
                    <br />
                    Anytime the player misses a shot the Inning is over.
                    <br />
                    The first ten balls score 1 point each
                    <br />
                    The last five balls score 2 points each if made in rotation.
                    <br />
                    The maximum score per Inning is 20 points.
                    <br /><br />
                    4. When there are six balls on the table and player pockets two or more balls in one shot, they all stay down and are each worth 1 point. Shoot the remaining balls in rotation, in which each ball is worth 2 points each.
                    <br /><br />
                    5. Ten Innings is a session. In one session you can score a maximum of 200 points.
                    <br /><br />
                    The score from five sessions (50 racks) is used for the Official Rating.
                    <br />
                    The highest possible Official score is 1000 points.
                </p>
                    <a href='https://billiards.colostate.edu/instructional-articles/pb-review/hopkins-q-skills/' target='_blank' rel="noopener noreferrer">source: billiards.colostate.edu</a>
                </Rules>
            }
        </HelpModalStyled >
    )
}

export default HelpModal
