using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class FinishLine : MonoBehaviour {
	private bool _redKidHere;
	private bool _blueKidHere;
	private bool _bothKidsHere;

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

