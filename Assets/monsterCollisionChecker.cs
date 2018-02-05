using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class monsterCollisionChecker : MonoBehaviour {

	public GameObject redKid; 

	// Use this for initialization
	void Start () {
		// Ignores physics collison.
		Physics2D.IgnoreLayerCollision (13, 14, true); 
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	//void OnCollisionEnter2D(Collider2D C2D)
	//{
	//	if (C2D.gameObject.name == "RedKid") {
	//		
	//	}
	//}
}
