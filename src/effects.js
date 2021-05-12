const effects = {
    parseEffect: (textContent) => {
        var effect = textContent.split(" ")[0].trim();

        if(effect == "type" || 
           effect == "fill" ||
           effect == "flip") {
            return { effect, content: textContent.replace(effect, "") };
        }

        if(effect == "random") {
            //Do randomisation and pick an effect
        }

        return { effect: "default", content: textContent };
    }
}