"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("backgroundMusic");
    const letterPopup = document.getElementById("letterPopup");
    const photoPopup = document.getElementById("photoPopup");
    const openButton = document.getElementById("openSurprise");
    const continueButton = document.getElementById("continueButton");
    const letterText = document.getElementById("letterText");
    const gallery = document.getElementById("gallery");

    const myLetter = `hi baby, happy 3rd pooo. i'm so happy na ikaw yung kasama ko ngayon. i'm thankful for all our little moments, random chika, lambing kahit hindi marunong, and kalokohan HAHAHAHA. i'm happy kasi ikaw yung kausap ko. more chika to come pa po, baby 😭😂

baby, when we broke up before, i felt like i lost a part of myself because you had become such a big part of my life. pero naalala ko yung sinabi mo na, "when the time is right, the Lord will make it happen." and now, i believe that being part of each other's lives again is part of the Lord's plan. hindi ko man alam lahat ng plano Niya, i'm just thankful for the chance to share this chapter with you again. 🥹❤️

hindi man laging perfect, we're still learning about each other. may times na madami tayong misunderstanding, but i hope we continue to communicate and learn po. we don't have to get everything right agad, baby. let's just keep growing po.

baby, i know you're pressured po, pero take it easy lang po, i'm so proud of you and everything you're working for. meron kang markco na willing mag support sa lahat ng journey mo. you don't have to figure everything out all at once, baby. i believe in you and i'm happy to see you working toward the things you want to achieve. ❤️

i want you to know that i love you, your flaws, your insecurities, and everything about you. you don't have to be perfect, you're always my favourite, i hope you learn to appreciate yourself as much as the people who love you do. you can be yourself with me, whether you're happy, tired, quiet, or just not feeling your best. you don't always have to have the right words or pretend that everything is okay.

kain tama sa oras, baby, magpahinga ka rin kapag pagod ka na. alagaan mo sarili mo po because you deserve to feel good and take care of yourself, too.❤️

i'm excited for more month,memories, chika, HAHAHAHA. thank you for being part of my life and for all the little things that make our relationship special. i'm looking forward to knowing you more and making ordinary days memorable together.

happy 3rd, my baby, ❤️🥹 i love you more than words can tell, in every universe and on every planet. i'm excited for the memories we still get to make. hindi pa kita tatantanan, hanggat wala pang 😭 i love you so, so much, babyyyy!😚❤️

Markco ❤️`;

    // OPEN THE LETTER AND START MUSIC
    openButton.addEventListener("click", async () => {
        letterText.textContent = myLetter;
        letterPopup.classList.add("show");
        document.body.style.overflow = "hidden";

        try {
            await music.play();
        } catch (error) {
            console.error("Music could not play. Check music.mp3.", error);
        }
    });

    // CONTINUE TO THE SIX-PHOTO SURPRISE
    continueButton.addEventListener("click", () => {
        letterPopup.classList.remove("show");
        document.body.style.overflow = "";

        gallery.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });

    // OPEN EACH PHOTO'S MESSAGE
    document.querySelectorAll(".photo-card").forEach(card => {
        card.addEventListener("click", () => {
            document.getElementById("photoTitle").textContent =
                card.dataset.title;

            const popupPhoto = document.getElementById("popupPhoto");
            popupPhoto.src = card.dataset.photo;
            popupPhoto.alt = card.querySelector("img").alt;

            document.getElementById("photoMessage").textContent =
                card.dataset.message;

            photoPopup.classList.add("show");
            document.body.style.overflow = "hidden";
        });
    });

    // CLOSE BUTTONS FOR BOTH POPUPS
    document.querySelectorAll("[data-close]").forEach(button => {
        button.addEventListener("click", () => {
            const popup = document.getElementById(button.dataset.close);

            if (popup) {
                closePopup(popup);
            }
        });
    });

    function closePopup(popup) {
        popup.classList.remove("show");

        if (!document.querySelector(".popup.show")) {
            document.body.style.overflow = "";
        }
    }

    // CLOSE WHEN CLICKING OUTSIDE THE POPUP
    document.querySelectorAll(".popup").forEach(popup => {
        popup.addEventListener("click", event => {
            if (event.target === popup) {
                closePopup(popup);
            }
        });
    });

    // CLOSE POPUPS WITH ESCAPE
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            document.querySelectorAll(".popup.show").forEach(closePopup);
        }
    });

    // RETURN TO THE TOP
    document.getElementById("backToTop").addEventListener("click", () => {
        document.getElementById("home").scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});