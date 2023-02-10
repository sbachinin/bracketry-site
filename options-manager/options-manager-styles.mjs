export const options_manager_styles = `


    .search-input {
        margin: 10px;
        width: calc(100% - 30px);
        border: 2px solid #41aaca;
        border-radius: 4px;
    }

    .found-names {
        margin-bottom: 20px;
    }

    .found-name {
        padding: 2px 10px;
        cursor: pointer;
    }

    .found-name.selected {
        background: #ffffc5;
    }







    .options-group-heading {
        background: #00eadd1a;
        font-size: 18px;
        padding: 8px 20px 8px 10px;
        font-family: monospace;
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
        clear: both;
        color: black;
        text-transform: capitalize;
        margin: 8px;
    }

    .options-group-heading span {
        display: inline-block;
        line-height: 0;
        font-weight: normal;
        font-size: 18px;
    }

    .single-option-wrapper {
        padding: 9px 12px;
        position: relative;
    }
    .single-option-wrapper.selected {
        background: #ffffc5;
    }

    .single-option-wrapper.disabled input,
    .single-option-wrapper.disabled select,
    .single-option-wrapper.disabled textarea,
    .single-option-wrapper.disabled .checkbox {
        filter: blur(0.6px);
        pointer-events: none;
        cursor: auto;
        /* color: transparent; */
    }

    .single-option-wrapper.disabled .option-name,
    .single-option-wrapper.disabled .option-title {
        color: rgba(0,0,0,.35);
    }

    .single-option-wrapper:not(:first-child) {
        border-top: 1px solid #ccc;
    }

    .option-name {
        display: block;
        color: #ababab;
        word-wrap: anywhere;
        font-style: italic;
        margin-bottom: 5px;
        font-size: 13px;
        padding-right: 25px;
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
        justify-content: space-between;
    }

    .single-option:not(.boolean) .option-info {
        margin: 0 0 8px 0;
    }


    .option-explanation-button {
        margin: 0 10px;
        cursor: pointer;
        display: flex;
        align-items: center;
        position: absolute;
        right: 0;
        top: 7px;
    }

    .option-explanation-button svg {
        height: 14px;
        fill: #787676;
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
        margin-left: 10px;
    }
    .checkbox.checked {
        color: #1c5dd9;
    }

`
