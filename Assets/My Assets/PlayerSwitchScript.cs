using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PlayerSwitchScript : MonoBehaviour {

    private bool _spaceDown = false; //Used for if the space bar has been pressed

    public GameObject redPlayer, bluePlayer, FinishLine; //instances of each player
	public GameObject activePlayer;


    public bool GetPlayerSwitch
    {
        get { return _spaceDown; } //Return the value of _spaceDown
    }

	// Use this for initialization
	void Start () {
        print("This is Olivia's useless print statement. Yay!"); 
        //begin with bluePlayer disabled
        bluePlayer.GetComponent<PlayerControl>().enabled = false;
    }
	
	// Update is called once per frame
	void Update () {

		if (FinishLine.GetComponent<FinishLine> ().GetBothKidsHere) {
			print ("Yay you won! Feel accomplished."); 
		}

        //Check for Space Bar Press, switch value
        if (Input.GetKeyDown("space") && _spaceDown == false)
        {
            //If spacebar is pressed, and _spaceDown is false 
            //turn off the PlayerController script for redPlayer 
            //and turn on the PlayerController script for bluePlayer
            _spaceDown = true;

            redPlayer.GetComponent<PlayerControl>().enabled = false;
            bluePlayer.GetComponent<PlayerControl>().enabled = true;
			activePlayer = bluePlayer;

        }
        else if(Input.GetKeyDown("space") && _spaceDown == true)
        {
            //If spacebar is pressed, and _spaceDown is true 
            //turn off the PlayerController script for bluePlayer 
            //and turn on the PlayerController script for redPlayer
            _spaceDown = false;

            redPlayer.GetComponent<PlayerControl>().enabled = true;
            bluePlayer.GetComponent<PlayerControl>().enabled = false;
			activePlayer = redPlayer;
            
        }

		if (activePlayer == redPlayer)
		{
			
			bluePlayer.transform.Find ("Silo");
		}
          

    }

}
