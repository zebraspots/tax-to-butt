walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(/\bTax\b/g, "Butt");
	v = v.replace(/\btax\b/g, "butt");
	v = v.replace(/\bTaxes\b/g, "Butts");
	v = v.replace(/\btaxes\b/g, "butts");
	v = v.replace(/\btaxpayer\b/g, "buttpayer");
	v = v.replace(/\bTaxpayer\b/g, "Buttpayer");
	v = v.replace(/\btaxation\b/g, "buttation");
	v = v.replace(/\bTaxation\b/g, "Buttation");
	v = v.replace(/\btaxing\b/g, "butting");
	v = v.replace(/\bTaxing\b/g, "Butting");
	
	textNode.nodeValue = v;
}


