-- Befehle um Präsentationen zu erstellen


-- Globale Variablen {**

ratio = "1680x1050"

slideno = 1 

-- **}


-- Funktionen {**
-- 

function Slide (content)

	if (modus == "slides") then
		return content
	else
		local s = "\\startalignment[middle]\\dontleavehmode\\externalfigure[" .. ProjectId .. "-handout" .. "-slides_" .. slideno+1 .. "_" .. ratio .. ".png][frame=on, width=0.8\\textwidth]\\stopalignment"
		slideno = slideno + 1
		return s
	end

end



function Handout (content)

	if (modus == "handout") then
		return content .."\\page"
	else
		return ""
	end
end



function SVG (ContentSlide, ContentHandout)

	if (modus == "slides") then
	    if (slidetarget == "handout") then
		return '<iframe data-src="' .. ContentHandout .. '" width="800" height="500"></iframe>'
	    else
		return '<iframe data-src="' .. ContentSlide .. '" width="800" height="500"></iframe>'
	    end
	else
		local s = "\\startalignment[middle]\\dontleavehmode\\externalfigure[" .. ProjectId .. "-handout" .. "-slides_" .. slideno+1 .. "_" .. ratio .. ".png][frame=on, width=0.8\\textwidth]\\stopalignment"
		slideno = slideno + 1
		return s
	end
end



function Note (content)

	local s1 = [[<aside class="notes">]]
	local s2 = "</aside>"

	if (modus == "slides") then
		s = s1 .. content .. s2
		return s
	elseif (modus == "notes") then
		return content .. "\\page"
	else
		return ""
	end
end


-- **}
