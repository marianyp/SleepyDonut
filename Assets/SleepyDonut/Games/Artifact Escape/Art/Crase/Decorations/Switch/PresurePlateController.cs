using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PresurePlateController : MonoBehaviour
{

    public bool isPressed = false;

    public Sprite pressedSprite, unpressedSprite;

    public SpriteRenderer spriterenderer;

    public List<GameObject> goList;

    public AudioSource clip;

    // Update is called once per frame
    public void press()
    {
        if (clip != null)
        {
            clip.pitch = 1;
            clip.Play();
        }
        isPressed = true;
        spriterenderer.sprite = pressedSprite;
    }

    public void unpress()
    {
        if (clip != null)
        {
            clip.pitch = -1;
            clip.Play();
        }
        isPressed = false;
        spriterenderer.sprite = unpressedSprite;
    }

    private void OnTriggerEnter2D(Collider2D collision)
    {
        goList.Add(collision.gameObject);
        if(!isPressed)
            press();
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
        goList.Remove(collision.gameObject);

        if(goList.Count == 0) {
            unpress();
        }
    }
}
