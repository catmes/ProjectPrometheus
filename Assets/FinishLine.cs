using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FinishLine : MonoBehaviour {
	private bool _redKidHere; // checks to see if redKid is at finish line
	private bool _blueKidHere; // checks to see if blue is at finish line
	private bool _bothKidsHere; // checks to see if both are at finish line

	void Start()
	{
		_redKidHere = false;
		_blueKidHere = false;
		_bothKidsHere = false;
	}

	public bool GetBothKidsHere
	{
		get {return _bothKidsHere;}
	}


	void OnTriggerEnter2D(Collider2D C2D)
	{
		// have an unrendered cube acting as a trigger to check player location
		if (C2D.gameObject.name == "RedKid") {
			_redKidHere = true;
		} else if (C2D.gameObject.name == "BlueKid") 
		{
			_blueKidHere = true;
		}

		if (_blueKidHere && _redKidHere) {
			_bothKidsHere = true;
		}


	}
}

