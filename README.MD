### CHALLENGE

Count the number of objects in a bitmap (2D perfect array). 1 object is a group of all the adjacent black pixels (horizontally or vertically, not diagonal)
(black pixels: 1, white pixels: 0)
- eg 1: (2 objects)
	<table>
		<tr>
			<td>1</td>
			<td>0</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
			<td>0</td>
		</tr>
		<tr>
			<td>1</td>
			<td>0</td>
			<td>0</td>
		</tr>
	</table>
- eg 2: (1 object)
	<table>
		<tr>
			<td>0</td>
			<td>1</td>
		</tr>
		<tr>
			<td>1</td>
			<td>1</td>
		</tr>
	</table>
- eg 3: (4 objects)
	<table>
		<tr>
			<td>1</td>
			<td>0</td>
			<td>1</td>
		</tr>
		<tr>
			<td>0</td>
			<td>1</td>
			<td>0</td>
		</tr>
		<tr>
			<td>0</td>
			<td>0</td>
			<td>1</td>
		</tr>
	</table>