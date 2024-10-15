import { Tooltip } from "react-tooltip";

export const ToolTips = (): JSX.Element => {
    const TOOLTIPS: string[] = ["settings", "search", "voiceSearch"];
    
    return (
        <div>
            {TOOLTIPS.map((id, index) => <Tooltip style={{zIndex: "1000"}} key={index} id={id} />)}
        </div>
    );
};