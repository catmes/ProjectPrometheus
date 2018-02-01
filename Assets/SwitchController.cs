using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class SwitchController : MonoBehaviour {

	public GameObject monster; 

	// Use this for initialization
	void Start () {
		
	}
	
	// Update is called once per frame
	void Update () {
		
	}

	void OnTriggerEnter2D(Collider2D C2D)
	{
		print ("Hit!");
		if (C2D.gameObject.name == "RedKid") {
			GameObject.Destroy(monster);
		} 


	}
}
