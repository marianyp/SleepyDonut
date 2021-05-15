using PowerTools;
using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class DoorAnim : MonoBehaviour
{

    public AnimationClip idleClose = null;
    public AnimationClip idleOpen = null;
    public AnimationClip open = null;
    public AnimationClip close = null;

    SpriteAnim m_anim = null;

    Collider2D twoDcollider = null;

    public bool startingStateisOpen = false;

    public bool isOpen = false;

    public bool currentState = false;

    public bool toggleColliders = true;

    // Start is called before the first frame update
    void Start()
    {
        m_anim = GetComponent<SpriteAnim>();
        twoDcollider = GetComponent<Collider2D>();
        if (!startingStateisOpen)
        {
            AnimEnableColliders();
            AnimPlayIdleClose();
        }
        else
        {
            AnimDisableColliders();
            AnimPlayIdleOpen();
        }
        isOpen = startingStateisOpen;
        currentState = isOpen;
    }

    // Update is called once per frame
    void Update()
    {

    }


    public void AnimEnableColliders()
    {
        if(toggleColliders)
            twoDcollider.enabled = true;
    }

    public void AnimDisableColliders()
    {
        if (toggleColliders)
            twoDcollider.enabled = false;
    }

    public void AnimPlayIdleOpen()
    {
        if (m_anim.Clip != idleOpen) // (check we're not already in the animation first though)
            m_anim.Play(idleOpen);
    }
    public void AnimPlayIdleClose()
    {
        if (m_anim.Clip != idleClose) // (check we're not already in the animation first though)
            m_anim.Play(idleClose);
    }

    public void AnimPlayOpen()
    {
        currentState = true;
        AnimDisableColliders();
        if (m_anim.Clip != open) // (check we're not already in the animation first though)
            m_anim.Play(open);
    }

    public void AnimClose()
    {
        currentState = false;
        AnimEnableColliders();
        if (m_anim.Clip != close) // (check we're not already in the animation first though)
            m_anim.Play(close);
    }

    public void Toggle() {
        if(currentState) {
            AnimClose();
        } else {
            AnimPlayOpen();
        }
    }
}
