export const options_manager_styles = `
    .options-group-heading {
        font-size: 16px;
        padding: 6px 20px 6px 10px;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: #373737;
        clear: both;
        color: white;
        text-transform: uppercase;
    }
    .options-group-heading {
        margin: 5px 0;
    }
    .single-option-wrapper {
        padding: 15px 12px;
    }


    .single-option-wrapper.disabled .option-name,
    .single-option-wrapper.disabled .option-title {
        color: rgba(0,0,0,.35);
        filter: blur(0.8px);
    }

    .single-option-wrapper.disabled input,
    .single-option-wrapper.disabled textarea {
        color: transparent;
        filter: blur(0.8px);
    }

    .single-option-wrapper:not(:first-child) {
        border-top: 1px solid #4a4a4a;
    }

    .option-name {
        display: block;
        color: #8e8e8e;
        word-wrap: anywhere;
        font-style: italic;
        margin-bottom: 5px;
    }

    .single-option {
        max-width: 100%;
        box-sizing: border-box;
        width: 100%;
    }
    .single-option input, .single-option textarea {
        width: 100%;
        box-sizing: border-box;
    }
    .single-option.boolean {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .single-option.boolean > input {
        width: 30px;
        cursor: pointer;
        flex-basis: 30px;
        flex-grow: 0;
        flex-shrink: 0;
    }

    .option-info {
        display: flex;
        align-items: center;
    }

    .single-option:not(.boolean) .option-info {
        margin: 0 0 8px 0;
    }


    .option-explanation-button {
        padding: 7px;
        margin: 0 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
    }






    .crossed {
        background: 
            linear-gradient(to top left,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) calc(50% - 0.8px),
                rgba(0,0,0,1) 50%,
                rgba(0,0,0,0) calc(50% + 0.8px),
                rgba(0,0,0,0) 100%),
            linear-gradient(to top right,
                rgba(0,0,0,0) 0%,
                rgba(0,0,0,0) calc(50% - 0.8px),
                rgba(0,0,0,1) 50%,
                rgba(0,0,0,0) calc(50% + 0.8px),
                rgba(0,0,0,0) 100%);
    }



    
    .checkbox {
        border: 1px solid black;
        color: transparent;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        font-weight: bold;
        flex-shrink: 0;
    }
    .checkbox.checked {
        color: #1c5dd9;
    }

`
